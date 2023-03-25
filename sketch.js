function preload(){
	// inconsolata = loadFont('assets/inconsolata.otf');
}

let nSlimes = 1;

let slimes = [];
let background_gray = 0;
let background_alpha = 25;
let dt = 0.05;

// canvas elements
var canvas;// = document.getElementById("canvas");
var ctx;//    = canvas.getContext("2d");
// const image  = document.getElementById("source");

function setup() {
	createCanvas( windowWidth, windowHeight, WEBGL);
	// createCanvas(windowWidth, windowHeight);
	ctx = canvas.getContext('webgl');

	// canvas = document.getElementById("defaultCanvas0");
	// console.log(canvas);
	
	console.log(ctx);
	

	translate(width/2, height/2);
	background(background_gray);
	
	for(let i = 0; i<nSlimes; i++){
		slimes[i] = new Slime(width, height);
	}

	// console.log(width/2, height/2);
}

function draw() {
	background(background_gray, background_alpha);
	translate(width/2, height/2);

	// ctx.filter = 'blur(15px)';

	for( let i=0; i<slimes.length; i++ ){
		slimes[i].update(dt);
		slimes[i].draw();
	}
	noLoop();
}

class RandomColor{
	constructor(){
		this.r = this.#random_scale();
		this.g = this.#random_scale();
		this.b = this.#random_scale();
		this.a = 0.75;
	}

	#random_scale(){
		return Math.floor(Math.random() * 256); 
	}

	as_hexstring() {
		const rgb = (this.r << 16) | (this.g << 8) | (this.b << 0);
		return '#' + (0x1000000 + rgb).toString(16).slice(1);
	}

	rgba_string() {
		return `rgba(${this.r},${this.g},${this.b},${this.a})`
	}

}

class Slime{
	constructor(xmax,ymax){
		this.xmax = xmax;
		this.ymax = ymax;

		var x = random(-xmax/2, xmax/2);
		var y = random(-ymax/2, ymax/2);

		this.q = createVector(x,y);
		this.v = p5.Vector.random2D().mult(50);
		this.col = new RandomColor();
		this.size = 25;
		this.vision_radius = 2*this.size;

		console.log( this.q.x, this.q.y );
	}

	draw() {
		// noStroke();
		// fill(this.col.as_hexstring());
		fill(this.col.rgba_string());
		// fill( this.r, this.g, this.b);
		ellipse(this.q.x,this.q.y,this.size,this.size);

		// velocity line
		stroke(this.col.rgba_string());
		line(this.q.x,this.q.y,this.q.x+this.v.x,this.q.y+this.v.y);
	
		fill(255, 60, 100);
  		text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
	}

	update(dt) {
		this.#update_heading();

		this.q.add( p5.Vector.mult(this.v, dt));

		if (this.q.x>this.xmax/2 || this.q.x<-this.xmax/2 ){
			this.v.x *= -1;
		}
		if (this.q.y>this.ymax/2 || this.q.y<-this.ymax/2 ){
			this.v.y *= -1;
		}
	}

	#update_heading() {
		let rxmin = Math.max(
			Math.floor(this.q.x) - this.vision_radius,
			-width/2
		);
		var rxmax = Math.min(
			Math.floor(this.q.x) + this.vision_radius,
			width/2
		);
		var rymin = Math.max(
			Math.floor(this.q.y) - this.vision_radius,
			-height/2
		);
		var rymax = Math.min(
			Math.floor(this.q.y) + this.vision_radius,
			height/2
		);

		let test_color = color(255);
		for (let xx = rxmin; xx <= rxmax; xx++ ){
			console.log(xx);
			for (let yy = rymin; yy <= rymax; yy++ ){
				let d = dist(xx,yy,this.q.x, this.q.y);
				// if (d>this.size & d<this.vision_radius){
				// 	set(xx,yy,test_color);
				// }
			}
		}
		// translate(-width/2, -height/2);
		// updatePixels();
		// translate(width/2, height/2);
		// for (let i = max())

	}



}
