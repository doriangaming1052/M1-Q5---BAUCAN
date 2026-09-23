const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


camera.position.z = 10;
scene.background=new THREE.Color(0xfadcf9)


// Dodehecadron
const dodecahedrongeometry = new THREE.DodecahedronGeometry();
const dodecahedronmaterial = new THREE.MeshNormalMaterial( { color: 0xffff00 } );
const dodecahedron = new THREE.Mesh( dodecahedrongeometry, dodecahedronmaterial );
scene.add( dodecahedron )


// Cylinder
const cylindergeometry = new THREE.CylinderGeometry( 0.75, 0.75, 1.5, 32 );
const cylindermaterial = new THREE.MeshBasicMaterial( { color: 0x6707f7} );
const cylinder = new THREE.Mesh( cylindergeometry, cylindermaterial );
scene.add( cylinder );

cylinder.position.x = 0;
cylinder.position.y = -5;


// Cone
const conegeometry = new THREE.ConeGeometry( 0.75, 1.5, 32 );
const conematerial = new THREE.MeshBasicMaterial( { color: 0x07f7a7 } );
const cone = new THREE.Mesh(conegeometry, conematerial );
scene.add( cone );

cone.position.x = 0;
cone.position.y = 5;


// Capsule
const capsulegeometry = new THREE.CapsuleGeometry( 0.75, 0.75, 4, 8, 1 );
const capsulematerial = new THREE.MeshBasicMaterial( { color: 0xf707f7 } );
const capsule = new THREE.Mesh( capsulegeometry, capsulematerial );
scene.add( capsule );

capsule.position.x = -5;
capsule.position.y = 0;


// Cube
const cubegeometry = new THREE.BoxGeometry( 1.25, 1.25, 1.25 );
const cubematerial = new THREE.MeshBasicMaterial( { color: 0x9b07f7 } );
const cube = new THREE.Mesh( cubegeometry, cubematerial );
scene.add( cube );

cube.position.x = 5;
cube.position.y = 0;





function animate( time ) {

    

dodecahedron.rotation.x += 0.01;
dodecahedron.rotation.y += 0.01;

cylinder.rotation.x += 0.01;
cylinder.rotation.y += 0.01;

cone.rotation.x += 0.01;
cone.rotation.y += 0.01;

capsule.rotation.x += 0.01;
capsule.rotation.y += 0.01;

cube.rotation.x += 0.01;
cube.rotation.y += 0.01;



  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );