
// slime parameters
let nSlimes = 0;
let slimes = [];

// engine elements
let dt = 0.05;


// let blurShader;
let myShader;

// canvas elements
var canvas;// = document.getElementById("canvas");
var ctx;//    = canvas.getContext("2d");

// debugging things
let fraps = 1; // lower frame rate for debug
let puppy;

function preload(){
	// load the shader
	blurShader = loadShader('blur.vert','blur.frag');
	// myShader = loadShader('shader.vert','shader.frag');
}

function setup() {
	frameRate(fraps);
	puppy = loadImage('assets/aussie.jpg')

	createCanvas( windowWidth, windowHeight, WEBGL);
	ctx = canvas.getContext('webgl');

	rectMode(CENTER);
	noStroke();
	fill(255);
	rect(0,0,100,100);

	console.log(width, height);
}

function draw() {
	// Set the shader and pass the blur amount
	shader(blurShader);
	blurShader.setUniform('blurAmount', 100);
	// Todo 3: send canvas image instead of puppy
	blurShader.setUniform('tex0', puppy);

	console.log(puppy);

	rect(0,0,width,height);
	// image(puppy, 0, 0);
}

