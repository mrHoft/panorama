import * as THREE from 'three';

export function getMarker(x: number, y: number, z: number) {
  const material = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 3 });
  const points = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 150, 0),
    new THREE.Vector3(-5, 158, 0),
    new THREE.Vector3(0, 166, 0),
    new THREE.Vector3(5, 158, 0),
    new THREE.Vector3(0, 150, 0),
  ];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometry, material);
  line.position.set(x, y, z);
  return line;
}
