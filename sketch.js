
// slime parameters
let nSlimes = 0;
let slimes = [];

// engine elements
let dt = 0.05;
let fraps = 30;

// shader variables
let blockShader;
let burnShader0, burnShader1;
let blurShader;

// frame buffer
let graphics;
let g0, g1;
let puppy;

// kernel
let kernel1D = [];
let kernel_max_len = 33;
let M = 16;
let N = 2*M+1;
let sigma = 30.0;

function preload(){
	// load the shader
	blockShader = loadShader('shaders/block.vert','shaders/block.frag');
	
	burnShader0 = loadShader('shaders/burn.vert', 'shaders/burn.frag');
	burnShader1 = loadShader('shaders/burn.vert', 'shaders/burn.frag');

	blurShader = loadShader('shaders/blur_16.vert','shaders/blur_16.frag');

	puppy = loadImage('assets/aussie_trim.jpg');
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

	texture = createTexture(puppy);

	generateKernel();

	noLoop();
}

function draw(){
	background(240);
	// scale(1,-1);

	image(texture, -0.30*width, -50);

	// g0 = createGraphics(texture.width,texture.height, WEBGL);
	// g0.shader(burnShader0);	
	// burnShader0.setUniform('u_resolution', [g0.width, g0.height]);
	// burnShader0.setUniform('u_tex', texture);
	// burnShader0.setUniform('u_burnrate',0.90);
	// g0.rect(0,0,g0.width,g0.height);
	// g0.resetShader();
	
	// switch to block shader to create block texture
	// then test for x vs. y directional bluring
	g0 = createGraphics(texture.width,texture.height, WEBGL);
	g0.shader(blockShader);	
	blockShader.setUniform('u_resolution', [g0.width, g0.height]);
	g0.rect(0,0,g0.width,g0.height);
	g0.resetShader();
	
	image(g0,0,0);

	g1 = createGraphics(g0.width,g0.height, WEBGL);
	g1.shader(blurShader);
	blurShader.setUniform('u_resolution', [g1.width, g1.height]);
	blurShader.setUniform('u_tex', g0);
	blurShader.setUniform('u_dir',[1,0]);
	// blurShader.setUniform('u_dir',[0,1]);
	blurShader.setUniform('u_kernel1D', kernel1D);
	blurShader.setUniform('u_M', M);
	g1.rect(0,0,g1.width,g1.height);
	g1.resetShader();

	image(g1,0.30*width,50);
	console.log(kernel1D[16]);
	
	// image(g1, 0,0);
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
	for (let i=0; i<M; i++){
		let arg = 1.0*(i)/sigma;
		kernel1D[16+i] = Math.exp( -1.0* Math.pow(arg,2)  );
		kernel1D[16-i] = kernel1D[16+i];
	}

	sum = kernel1D.reduce( (a,b) => a+b,0 );
	for (let i=0; i<kernel_max_len; i++){
		kernel1D[i] = kernel1D[i]/sum;
	}

}