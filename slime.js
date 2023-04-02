class Slime{
	constructor(xmax,ymax){
		this.xmax = xmax;
		this.ymax = ymax;

		var x = random(-xmax/2, xmax/2);
		var y = random(-ymax/2, ymax/2);

		this.q = createVector(x,y);
		this.v = p5.Vector.random2D().mult(50);
		this.col = new RandomColor();
		this.size = 10;
		this.vision_radius = 2*this.size;

		// console.log( this.q.x, this.q.y );
	}

	draw(g) {
		// noStroke();
		// fill(this.col.as_hexstring());
		g.fill(this.col.rgba_string());
		// fill( this.r, this.g, this.b);
		g.ellipse(this.q.x,this.q.y,this.size,this.size);

		// velocity line
		// g.stroke(this.col.rgba_string());
		// g.line(this.q.x,this.q.y,this.q.x+this.v.x,this.q.y+this.v.y);
	
		// fill(255, 60, 100);
  		// text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
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

		// let test_color = color(255);
		// for (let xx = rxmin; xx <= rxmax; xx++ ){
		// 	console.log(xx);
		// 	for (let yy = rymin; yy <= rymax; yy++ ){
		// 		let d = dist(xx,yy,this.q.x, this.q.y);
		// 		if (d>this.size & d<this.vision_radius){
		// 			set(xx,yy,test_color);
		// 		}
		// 	}
		// }
		// translate(-width/2, -height/2);
		// updatePixels();
		// translate(width/2, height/2);
		// for (let i = max())

	}



}
