// the shader variable
let camShader;

// the camera variable
let cam;
let xoff = 0;
let x = 1;

function preload(){
	// load the shader
	camShader = loadShader('effect.vert','effect.frag')
}

function setup() {
	createCanvas( windowWidth, windowWidth/1.61 , WEBGL);
	
	background(20);
	noStroke();

	// initialize the webcam at the window size
	cam = createGraphics(width, height);
	cam.noStroke();

	// hide the html element that createCapture adds to screen
	cam.hide();

	// fill(0,0,255);
	// ellipse(150,height/2,100,100);

	// fill(0,255,0);
	// ellipse(width-150,height/2,100,100);

	// console.log(width, height);

	// drawingContext.filter = 'blur(8px)';

}

function draw() {
	cam.background(20);
	// console.log("FPS: " + frameRate);
	// rect(0,0,width,height);
	// var ctx = canvas.getContext("2d");
	// net.draw(ctx);
}

