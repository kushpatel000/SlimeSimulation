
// slime parameters
let nSlimes = 0;
let slimes = [];

// engine elements
let dt = 0.05;


// let blurShader;
let myShader;

// gaussian blur statistics
const radius = 16; // must be 16 or less
const sigma = 10;
const N = 2*radius+1;
let kernel1D = [];

// graphics elements
var canvas;// = document.getElementById("canvas");
var ctx;//    = canvas.getContext("2d");
let graphics;

// debugging things
let fraps = 1; // lower frame rate for debug
let puppy;

function preload(){
	generateKernel();
	// load the shader
	blurShader = loadShader('blur.vert','blur.frag');
	// myShader = loadShader('shader.vert','shader.frag');
}

function setup() {
	frameRate(fraps);
	// puppy = loadImage('assets/aussie.jpg')

	createCanvas( windowWidth-1, windowHeight-1, WEBGL);
	ctx = canvas.getContext('webgl');
	graphics = createGraphics(width, height);

	graphics.translate(width/2,height/2);
	graphics.rectMode(CENTER);
	graphics.noStroke();
	graphics.fill(255);
	graphics.ellipse(0,0,500,200,30);

	console.log(width, height);

	image(graphics,-width/2,-height/2,width,height);
}

function draw() {
	// Set the shader and pass the blur amount
	shader(blurShader);
	// blurShader.setUniform('N',N);
	// blurShader.setUniform('M',M);
	blurShader.setUniform('resolution',[width, height]);
	blurShader.setUniform('kernel1D', kernel1D);
	// Todo 3: send canvas image instead of puppy
	blurShader.setUniform('tex0', graphics);

	blurShader.setUniform('blurDirection',[1,0]);
	// graphics.image(graphics, 0, 0);
	
	// blurShader.setUniform('blurDirection',[0,1]);
	// graphics.image(graphics, 0, 0);
	
	image(graphics, 0, 0);

	noLoop();
}

function generateKernel() {
	// create the unraveled kernel
	sum = 0.0
	for (let i=0; i<N; i++){
		let arg = 1.0*(i-radius)/sigma;
		kernel1D[i] = Math.exp( -1.0* Math.pow(arg,2)  );
		sum += kernel1D[i]
	}
	for (let i=0; i<N; i++){
		kernel1D[i] /= sum;
	}

}