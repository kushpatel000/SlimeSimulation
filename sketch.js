
// slime parameters
let nSlimes = 0;
let slimes = [];

// engine elements
let dt = 0.05;
let fraps = 1;

// shader variables
let blockShader0,blockShader1;
let theShader;

// frame buffer
let graphics;
let g0, g1;
let puppy;
let pingpong = true;

function preload(){
	// load the shader
	blockShader0 = loadShader('shaders/block.vert','shaders/block.frag');
	blockShader1 = loadShader('shaders/block.vert','shaders/block.frag');
	puppy = loadImage('assets/aussie.jpg');
}

function setup(){
	// drop frame rate 
	frameRate(fraps);

	// disables scaling for retina screens which can create inconsistent scaling between displays
	pixelDensity(1);

	// shaders require WEBGL mode to work
	createCanvas(windowWidth, windowHeight, WEBGL);
	
	// g1 = createGraphics(windowWidth,windowHeight, WEBGL);
	
	// g0.imageMode(CENTER);
	// g1.imageMode(CENTER);

	noStroke();
	background(255);
	imageMode(CENTER);

	texture = createTexture(puppy);
}

function draw(){
	background(255);
	
	g0 = createGraphics(texture.width,texture.height, WEBGL);
	g0.shader(blockShader0);
	// blockShader0.setUniform('u_resolution', [width, height]);
	blockShader0.setUniform('u_tex', texture);
	g0.rect(0,0,width,height);
	g0.resetShader();

	g1 = createGraphics(texture.width,texture.height, WEBGL);
	g1.shader(blockShader0);
	// blockShader1.setUniform('u_resolution', [width, height]);
	blockShader1.setUniform('u_tex', g0);
	g1.rect(0,0,width,height);
	g1.resetShader();
	
	image(g1, 0,0);
	// // send data from sketch into shader
	// blockShader.setUniform('u_resolution', [width, height]);
	// blockShader.setUniform('u_tex', g1);
	// // shader() sets the active shader with our shader
	// g0.shader(blockShader);
	// g0.background(0);
	// g0.image(g1,0,0);
	// resetShader();
	
	// blockShader.setUniform('u_resolution', [width, height]);
	// blockShader.setUniform('u_tex', g0);
	// g1.background(0);
	// g1.shader(blockShader);
	// g1.image(g0,0,0);
	// resetShader();
	
	// image(g1,0,0);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function createTexture(img) {
	let texture = createGraphics(img.width, img.height, WEBGL);
	texture.textureWrap(REPEAT, REPEAT);
	texture.image(img, 0, 0);
	return texture;
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