//setup scene, renderer and camera
var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera
(75, window.innerWidth/window.innerHeight, 0.1, 1000)
var renderer = new THREE.WebGLRenderer()
var finalCameraPosition = 10

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.domElement.id = '3d-dom'
renderer.domElement.classList.add('off')

document.getElementById('shoe-div').appendChild(renderer.domElement)

window.addEventListener('resize', function(){
    var width = window.innerWidth
    var height = window.innerHeight
    renderer.setSize(width, height)
    camera.aspect = width/height
    camera.updateProjectionMatrix();
})


scene.background = new THREE.Color(0x000000)

controls = new THREE.OrbitControls(camera, renderer.domElement)

//adding some nice and beautiful geometry to look at 
//material
var material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true})
//geometry
var geometry = new THREE.BoxGeometry(1,1,1)
//mesh/object
var cube = new THREE.Mesh(geometry, material)

scene.add(cube)

//adjust camera-zoom
if (window.innerWidth <= 767) {
    var Start = function () {
        camera.position.set(0, 0, 30);
    };
} else {
    var Start = function () {
        camera.position.set(0, 0, 15);
    };
}

let frame = 0

var Update = function(){
    if(frame == 0)
    {
        Start()
    }

    frame += 1
}

var Render = function (){
    renderer.render(scene, camera)
}

var GameLoop = function(){
    requestAnimationFrame(GameLoop)

    Update()
    Render()
}

GameLoop()


