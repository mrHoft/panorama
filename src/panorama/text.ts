import * as THREE from 'three';

export function getTextMesh(text: string) {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Set the canvas dimensions
  canvas.width = 200;
  canvas.height = 40;

  // Draw text on the canvas
  if (ctx) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
  }

  // Create a texture from the canvas
  const mapping = THREE.UVMapping;
  const textTexture = new THREE.CanvasTexture(canvas, mapping);
  textTexture.needsUpdate = true; // Ensure the texture is updated

  // Create a plane geometry for the texture
  const textGeometry = new THREE.PlaneGeometry(200, 40);

  // Create a material with the texture
  const textMaterial = new THREE.MeshBasicMaterial({ map: textTexture });

  // Create a mesh with the geometry and material
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);

  return textMesh;
}
