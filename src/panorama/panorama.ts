import * as THREE from 'three';
import { getMarker } from './marker';

const defaultPositionY = 3;

export function panorama() {
  let isRotating = false;
  let isIdle = true;
  let startX = 0;
  let width = window.innerWidth - 100;
  let height = window.innerHeight / 3;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(80, width / height, 1, 1000);
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);

  const group = new THREE.Group();
  group.rotation.y = defaultPositionY;
  scene.add(group);

  const texture = new THREE.TextureLoader().load('/montreal.jpg');
  const geometry = new THREE.SphereGeometry(500, 60, 40);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
  const panorama = new THREE.Mesh(geometry, material);
  group.add(panorama);

  group.add(getMarker(150, -50, 400), getMarker(0, -200, 400), getMarker(-100, -250, 400));

  const animate = () => {
    if (isIdle) {
      requestAnimationFrame(animate);
      group.rotation.y += 0.001;
      renderer.render(scene, camera);
    }
  };
  animate();

  function onMouseDown(event: MouseEvent) {
    isRotating = true;
    startX = event.clientX;
  }

  function onMouseUp() {
    isRotating = false;
  }

  function onMouseMove(event: MouseEvent) {
    if (isRotating) {
      const deltaX = event.clientX - startX;
      group.rotation.y -= deltaX * 0.005;
      startX = event.clientX;
    }
  }

  function onResize() {
    width = window.innerWidth - 100;
    height = window.innerHeight / 3;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  window.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mouseup', onMouseUp);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('resize', onResize);

  function smoothReturn() {
    isIdle = false;
    const step = group.rotation.y > defaultPositionY ? -0.1 : 0.1;
    requestAnimationFrame(() => {
      group.rotation.y += step;
      renderer.render(scene, camera);
      if (Math.floor(group.rotation.y * 10) !== defaultPositionY * 10) {
        requestAnimationFrame(smoothReturn);
      } else {
        isIdle = true;
        animate();
      }
    });
  }

  return { canvas: renderer.domElement, smoothReturn };
}
