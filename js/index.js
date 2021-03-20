var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set( 0, 10, 900 );
camera.lookAt( 0, 0, 0 );  

var geometry = new THREE.PlaneGeometry( 10000, 10000);
var material = new THREE.MeshBasicMaterial( {color: 0x221754, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );

// plane.position.y = -2;
// plane.position.z = 0;

// plane.rotateX(Math.PI/2 );
scene.add( plane );

var geometry2 = new THREE.PlaneGeometry( 10000, 600);
var material2 = new THREE.MeshBasicMaterial( {color: 0xce0de0, side: THREE.DoubleSide} );
var plane2 = new THREE.Mesh( geometry2, material2 );

plane2.position.z = 1;
plane2.position.y = 300;


scene.add( plane2 );

var gridColor = new THREE.Color( 0xce0de0 );

var loader = new THREE.GLTFLoader();

loader.load( '3DModels/low_poly_pillar/scene.gltf', function ( gltf ) {

    gltf.scene.position.z = 840;
    gltf.scene.position.y = 0;
    gltf.scene.position.x = -20;

    gltf.scene.scale.set(0.04, 0.04, 0.04);

    scene.add( gltf.scene );

}, undefined, function ( error ) {

    console.error( error );

} );

loader.load( '3DModels/helios_vaporwave_bust/scene.gltf', function ( gltf ) {

    gltf.scene.position.z = 800;
    gltf.scene.position.y = 3;
    gltf.scene.position.x = 40;

    gltf.scene.scale.set(1, 1, 1);

    scene.add( gltf.scene );

}, undefined, function ( error ) {

    console.error( error );

} );

var ambientLight = new THREE.AmbientLight( 0xcccccc );
scene.add( ambientLight );

var directionalLight = new THREE.DirectionalLight( 0xffffff );
directionalLight.position.set( 0, 1, 1 ).normalize();
scene.add( directionalLight );	

var size = 10000;
var divisions = 800;

var gridHelper = new THREE.GridHelper( size, divisions, gridColor, gridColor );
var gridHelper2 = new THREE.GridHelper( size, divisions, gridColor, gridColor );
var gridHelper3 = new THREE.GridHelper( size, divisions, gridColor, gridColor );
gridHelper2.position.y += 0.1;
gridHelper3.position.y += 0.2;
scene.add( gridHelper );
scene.add( gridHelper2);
scene.add( gridHelper3);

function animate() {
    requestAnimationFrame( animate );

    gridHelper.position.z += .5;
    gridHelper2.position.z += .5;
    gridHelper3.position.z += .5;
    
    if (gridHelper.position.z > 12) {
        gridHelper.position.z = 0;
        gridHelper2.position.z = 0;
        gridHelper3.position.z = 0;
    }
    renderer.render( scene, camera );
}
animate();