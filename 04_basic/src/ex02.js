import * as THREE from "three";

export default function example() {
  // renderer
  const canvas = document.querySelector("#three-canvas");
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  // 고해상도를 위해
  // 해당 기기의 픽셀 밀도
  // console.log(window.devicePixelRatio);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

  // 씬 만들기
  const scene = new THREE.Scene();

  // 카메라 만들기
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // 카메라 위치 정하고 올리기
  camera.position.z = 5;
  camera.position.y = 2;
  camera.position.x = 1;
  scene.add(camera);

  // mesh
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    color: "red",
  });

  // geometry material 조합
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 아직 보여지지 않음 renderer가 render해야 보여줌
  renderer.render(scene, camera);

  // 이벤트
  function setSize() {
    // 카메라 변화
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }
  window.addEventListener("resize", setSize);
}
