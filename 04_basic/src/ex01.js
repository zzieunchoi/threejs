import * as THREE from "three";

// console.log(THREE);
// 동적으로 캔버스 조립하기
// 렌더러 만들기
// const renderer = new THREE.WebGLRenderer();

// // 렌더러 사이즈 맞추기
// renderer.setSize(window.innerWidth, window.innerHeight);
// // 렌더러 캔버스
// // console.log(renderer.domElement);
// document.body.appendChild(renderer.domElement);

export default function example() {
  const canvas = document.querySelector("#three-canvas");
  // antialias: 부드럽게 하는 대신 성능은 저하
  const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  // const renderer = new THREE.WebGLRenderer({canvas});
  // console.log(window.innerWidth, window.innerHeight);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // 씬 만들기
  const scene = new THREE.Scene();

  // 카메라 만들기
  // 대표적인 두가지 - 중 가장 기본
  // 1. 원근 카메라 perspective
  // PerspectiveCamera( fov : 시야각, aspect : 가로 세로 비율, near : 어느 정도 가까이 오면 안보이게, far : 어느정도 멀면 안보이게 )
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

  // 2. 두번째 카메라  - 직교 카메라(원근법 무시, 게임 중에 디아블로 롤 등 )
  // OrthographicCamera( left : 절두체 왼쪽, right: 절두체 오른쪽, top:, bottom:, near:, far: ,  );
  // const camera = new THREE.OrthographicCamera(
  //   -(window.innerWidth / window.innerHeight),
  //   window.innerWidth / window.innerHeight,
  //   1,
  //   -1,
  //   0.1,
  //   1000
  // );
  // camera.position.z = 5;
  // camera.position.y = 2;
  // camera.position.x = 1;
  // // x,y, z로 지정되게 쳐다봄
  // camera.lookAt(0, 0, 0);
  // camera.zoom = 0.5;
  // // 카메라의 렌더러 변화가 생기면 업데이트 해야함
  // camera.updateProjectionMatrix();
  scene.add(camera);

  // mesh
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    // color: 0xff0000;
    // color: '#ff0000'
    color: "red",
  });

  // geometry material 조합
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 아직 보여지지 않음 renderer가 render해야 보여줌
  renderer.render(scene, camera);
}
