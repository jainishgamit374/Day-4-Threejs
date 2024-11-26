import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import vertex from "./shaders/vertex.glsl";
import fragment from "./shaders/fragment.glsl"; 

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 3;

// Object creation
const geometry = new THREE.PlaneGeometry(2, 2 , 50 , 50);
const material = new THREE.ShaderMaterial({
  vertexShader: vertex,
  fragmentShader: fragment,
  side: THREE.DoubleSide,
  wireframe: true, 
  uniforms: {
    uTime: { value: 0.0 },       
  },
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Renderer setup
const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Orbit controls setup
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;



// Window resize event listener
window.addEventListener("resize", function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation function
const clock = new THREE.Clock();

function animate() {
  material.uniforms.uTime.value = clock.getElapsedTime();
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
