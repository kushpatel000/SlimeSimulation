/*
TO DO

[x] Draw white circle on graphics, let blend
[x] Remove g2, use only g0,g1; full canvas
[x] Blank background, simple moving circles
[x] Slime motion: move along random vector, reflect off edges

*/

// disable frinendly errors
p5.disableFriendlyErrors = true;


// slime parameters
let nSlimes = 25;
let slimes = [];

// engine elements
let dt = 0.25;
let fraps = 15;

// shader variables
let blockShader;
let burnShader0, burnShader1;
let blurShaderX, blurShaderY;

// frame buffer
let graphics;
let g0, g1;
let puppy;

// kernel
let kernel1D = [];
let kernel_max_len = 33;
let M = 16;
let N = 2*M+1;
let sigma = 2.5;

function preload(){
	// load the shader
	blockShader = loadShader('shaders/block.vert','shaders/block.frag');
	
	burnShader0 = loadShader('shaders/burn.vert', 'shaders/burn.frag');
	burnShader1 = loadShader('shaders/burn.vert', 'shaders/burn.frag');

	blurShaderX = loadShader('shaders/blur_16.vert','shaders/blur_16.frag');
	blurShaderY = loadShader('shaders/blur_16.vert','shaders/blur_16.frag');

	// puppy = loadImage('assets/aussie_trim.jpg');
}

function setup(){
	// drop frame rate 
	frameRate(fraps);

	// disables scaling for retina screens which can create inconsistent scaling between displays
	pixelDensity(1);

	// shaders require WEBGL mode to work
	createCanvas(windowWidth-1, windowHeight-1, WEBGL);

	noStroke();
	background(255);
	imageMode(CENTER);

	// create slimes
	for (let i = 0; i < nSlimes; i++){
		slimes[i] = new Slime(width,height);
	}

	generateKernel();
	// console.log(kernel1D);
	// noLoop();
}

function draw(){
	// only create on first frame
	if (frameCount == 1){
		g0 = createGraphics(width,height, WEBGL);
		g1 = createGraphics(g0.width,g0.height, WEBGL);
	}
	
	// apply horzontal blur
	applyBlur(g0,g1,'X');	
	
	// apply vertical blur
	applyBlur(g1,g0,'Y');

	// draw actors
	g0.reset();
	g0.noStroke();
	
	for (let i = 0; i < nSlimes; i++){
		slimes[i].update(dt,g0);
		slimes[i].draw(g0);
	}

	// draw buffer to canvas
	image(g0,0,0);
	
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function createTexture(img) {
	let texture = createGraphics(img.width, img.height, WEBGL);
	texture.textureWrap(CLAMP, CLAMP);
	texture.imageMode(CENTER);
	texture.image(img, 0, 0);
	return texture;
}

function generateKernel() {
	// create the unraveled kernel
	for (let i = 0; i < kernel_max_len; i++){
		kernel1D[i] = 0.0
	}

	sum = 0.0
	for (let i=0; i<M+1; i++){
		let arg = 1.0*(i)/sigma;
		kernel1D[16+i] = Math.exp( -1.0* Math.pow(arg,2)  );
		kernel1D[16-i] = kernel1D[16+i];
	}

	sum = kernel1D.reduce( (a,b) => a+b,0 );
	for (let i=0; i<kernel_max_len; i++){
		// burn applied here; should move to separate shader?
		kernel1D[i] = 0.995*kernel1D[i]/sum;
	}

}

function applyBlur(g_inp, g_out, dir){
	// resending data might be taking extra resources
	// maybe its better to find some way to set these once
	if (dir == 'X'){
		g_out.shader(blurShaderX);
		blurShaderX.setUniform('u_resolution', [g_inp.width, g_inp.height]);
		blurShaderX.setUniform('u_dir',[1,0]);
		blurShaderX.setUniform('u_kernel1D', kernel1D);
		blurShaderX.setUniform('u_M', M);
		blurShaderX.setUniform('u_tex', g_inp);
		g_out.rect(0,0,g_out.width,g_out.height);
		g_out.resetShader();

	} else {
		g_out.shader(blurShaderY);
		blurShaderY.setUniform('u_resolution', [g_inp.width, g_inp.height]);
		blurShaderY.setUniform('u_dir',[0,1]);
		blurShaderY.setUniform('u_kernel1D', kernel1D);
		blurShaderY.setUniform('u_M', M);
		blurShaderY.setUniform('u_tex', g_inp);
		g_out.rect(0,0,g_out.width,g_out.height);
		g_out.resetShader();
	}
	
	// return g_out;
}