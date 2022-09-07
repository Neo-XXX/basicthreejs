import * as THREE from 'three';


//declaring the objects we'll need
var camera, scene, renderer;
var geometry, material, mesh;

scene = new THREE.Scene(); //instatiating our scene, groups everything that is displayed on our screen. objects go inside

geometry = new THREE.IcosahedronGeometry(200, 1);
material = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true, wireframeLinewidth: 2 });
// now using these two above, we can make our mesh 
mesh = new THREE.Mesh(geometry, material);

// add mesh to the scene
scene.add(mesh);

//render the scene to canvas 
renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// make camera object
// tells the renderer from what perspective the scene should be displayed
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 500;

//finally, we can display the scene by asking the renderer to display it from the camera's perspective:
renderer.render(scene, camera);



