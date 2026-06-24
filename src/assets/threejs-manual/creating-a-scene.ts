import * as THREE from "three";

const CreateAScene = () => {
  const rendererWidth = 320;
  const rendererHeight = 240;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    rendererWidth / rendererHeight,
    0.1,
    1000,
  );
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(rendererWidth, rendererHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.domElement.style.position = "fixed";
  renderer.domElement.style.top = "16px";
  renderer.domElement.style.right = "16px";
  renderer.domElement.style.background = "transparent";
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(3, 3, 3);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  renderer.setAnimationLoop(animate);

  function animate(time: number) {
    cube.rotation.x = time / 2000;
    cube.rotation.y = time / 1000;

    renderer.render(scene, camera);
  }

  return () => {
    renderer.setAnimationLoop(null);
    document.body.removeChild(renderer.domElement);
    geometry.dispose();
    material.dispose();
    renderer.dispose();
  };
};

export default CreateAScene;
