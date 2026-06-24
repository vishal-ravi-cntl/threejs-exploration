import * as THREE from "three";

const DrawingLines = () => {
  const rendererWidth = 320;
  const rendererHeight = 240;

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(rendererWidth, rendererHeight);
  renderer.setClearColor(0x000000, 0);
  document.body.appendChild(renderer.domElement);
  renderer.domElement.style.position = "fixed";
  renderer.domElement.style.top = "272px";
  renderer.domElement.style.right = "16px";
  renderer.domElement.style.background = "transparent";

  const camera = new THREE.PerspectiveCamera(
    45,
    rendererWidth / rendererHeight,
    1,
    500,
  );
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  const scene = new THREE.Scene();

  //create a blue LineBasicMaterial
  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

  const points = [];
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const line = new THREE.Line(geometry, material);
  scene.add(line);
  renderer.render(scene, camera);
};

export default DrawingLines();
