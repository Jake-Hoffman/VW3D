var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 10, 100 );
camera.lookAt( 0, 0, 0 );  

var geometry = new THREE.PlaneGeometry( 1000, 1000);
var material = new THREE.MeshBasicMaterial( {color: 0x221754, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );

plane.rotateX(Math.PI/2);
scene.add( plane );

var gridColor = new THREE.Color( 0xce0de0 );

// var geometry2 = new THREE.PlaneGeometry( 100, .5);
// var material2 = new THREE.MeshBasicMaterial( {color: gridColor, side: THREE.DoubleSide} );

// var cover = new THREE.Mesh(geometry2, material2)
// // cover.rotateX(Math.PI/1.99);
// cover.position.y += 7.8;
// scene.add(cover);

var size = 1000;
var divisions = 80;

var gridHelper = new THREE.GridHelper( size, divisions, gridColor, gridColor );
var gridHelper2 = new THREE.GridHelper( size, divisions, gridColor, gridColor );
var gridHelper3 = new THREE.GridHelper( size, divisions, gridColor, gridColor );
gridHelper2.position.y += 0.06;
gridHelper3.position.y += 0.12;
scene.add( gridHelper );
scene.add( gridHelper2);
scene.add( gridHelper3);

function animate() {
    requestAnimationFrame( animate );

    gridHelper.position.z += .2;
    gridHelper2.position.z += .2;
    gridHelper3.position.z += .2;
    
    if (gridHelper.position.z > 12) {
        gridHelper.position.z = 0;
        gridHelper2.position.z = 0;
        gridHelper3.position.z = 0;
    }
    renderer.render( scene, camera );
}
animate();