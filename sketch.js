
// slime parameters
let nSlimes = 0;
let slimes = [];

// engine elements
let dt = 0.05;
let fraps = 30;

// shader variables
let blockShader;
let burnShader0, burnShader1;
let blurShaderX, blurShaderY;

// frame buffer
let graphics;
let g0, g1, g2;
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

	// texture = createTexture(puppy);

	generateKernel();

	// noLoop();
}

function draw(){
	// only create on first frame
	if (frameCount == 1){
		g0 = createGraphics(width/2,height, WEBGL);
		g0.shader(blockShader);	
		blockShader.setUniform('u_resolution', [g0.width, g0.height]);
		g0.rect(0,0,g0.width,g0.height);
		g0.resetShader();
		
		g1 = createGraphics(g0.width,g0.height, WEBGL);
		g2 = createGraphics(g1.width,g1.height, WEBGL);
	
	
	} 
	
	// apply horzontal blur
	g1.shader(blurShaderX);
	blurShaderX.setUniform('u_resolution', [g1.width, g1.height]);	
	blurShaderX.setUniform('u_dir',[1,0]);
	blurShaderX.setUniform('u_kernel1D', kernel1D);
	blurShaderX.setUniform('u_M', M);
	if(frameCount > 2){
		blurShaderX.setUniform('u_tex', g2);
	} else {
		blurShaderX.setUniform('u_tex', g0);
	}
	g1.rect(0,0,g1.width,g1.height);
	g1.resetShader();
	
	// apply vertical blur
	g2.shader(blurShaderY);
	blurShaderY.setUniform('u_resolution', [g2.width, g2.height]);
	blurShaderY.setUniform('u_dir',[0,1]);
	blurShaderY.setUniform('u_kernel1D', kernel1D);
	blurShaderY.setUniform('u_M', M);
	blurShaderY.setUniform('u_tex', g1);
	g2.rect(0,0,g2.width,g2.height);
	g2.resetShader();

	if (frameCount % fraps == 0){
		console.log(frameCount);
		
		// draw images
		
		background(240);

		image(g0,-width/4,0);
		image(g2, width/4,0);

		// mid splitter
		fill(0);
		rectMode(CENTER);
		rect( 0,0,10, height );

	}

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