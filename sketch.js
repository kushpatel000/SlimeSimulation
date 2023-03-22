function preload(){
	// inconsolata = loadFont('assets/inconsolata.otf');
}

let nSlimes = 10;

let slimes = [];
let background_gray = 30;
let background_alpha = 10;
let dt = 0.05;

// canvas elements
var canvas;// = document.getElementById("canvas");
var ctx;//    = canvas.getContext("2d");
// const image  = document.getElementById("source");

function setup() {
	// createCanvas( windowWidth, windowHeight, WEBGL);
	createCanvas(windowWidth, windowHeight);
	canvas = document.getElementById("defaultCanvas0");
	ctx = canvas.getContext('2d');

	translate(width/2, height/2);

	background(background_gray);

	for(let i = 0; i<nSlimes; i++){
		slimes[i] = new Slime(0, 0, width, height);
	}


	console.log(slimes.length);
	col = new RandomColor();
	console.log( col.as_hexstring() );
}

function draw() {
	background(background_gray, background_alpha);
	translate(width/2, height/2);

	ctx.filter = 'blur(15px)';

	// fill(200,200,200);
	// ellipse(0,0,20,20);

	for( let i=0; i<slimes.length; i++ ){
		slimes[i].update(dt);
		slimes[i].draw();
	}
}

class RandomColor{
	constructor(){
		this.r = this.#random_scale();
		this.g = this.#random_scale();
		this.b = this.#random_scale();
	}

	#random_scale(){
		return Math.floor(Math.random() * 256); 
	}

	as_hexstring() {
		const rgb = (this.r << 16) | (this.g << 8) | (this.b << 0);
		return '#' + (0x1000000 + rgb).toString(16).slice(1);
	}

}

class Slime{
	constructor(x,y,xmax,ymax){
		this.xmax = xmax;
		this.ymax = ymax;
		this.q = createVector(x,y);
		this.v = p5.Vector.random2D().mult(50);
		this.col = new RandomColor();
	}

	draw() {
		noStroke();
		fill(this.col.as_hexstring());
		ellipse(this.q.x,this.q.y,25,25);
	}

	update(dt) {
		this.q.add( p5.Vector.mult(this.v, dt));

		if (this.q.x>this.xmax/2 || this.q.x<-this.xmax/2 ){
			this.v.x *= -1;
		}
		if (this.q.y>this.ymax/2 || this.q.y<-this.ymax/2 ){
			this.v.y *= -1;
		}
	}
}
