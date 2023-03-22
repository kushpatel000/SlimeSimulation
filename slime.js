class Slime{
	constructor(x,y,xmax,ymax){
		this.center = createVector(xmax/2, ymax/2);
		this.xmax = xmax;
		this.ymax = ymax;
		this.q = createVector(x,y);
		this.v = p5.Vector.random2D().mult(50);
		console.log(this.v.mag());
		// this.v = p5.Vector.rotate(this.q, -HALF_PI);
		this.a = p5.Vector.mult(this.q, -1);
	}

	draw() {
		stroke(100,100,255);
		fill(100,100,255);
		ellipse(this.q.x,this.q.y,50,50);

		// acceleration and velocity lines:
		// stroke(255,0,0);
		// line( this.q.x, this.q.y, 
		// 	this.q.x+this.v.x,
		// 	this.q.y+this.v.y
		// );
		// stroke(0,255,0);
		// line( this.q.x, this.q.y, 
		// 	this.q.x+this.a.x,
		// 	this.q.y+this.a.y
		// );
	}

// 	set_velocity(dx, dy) {
// 		this.v = createVector(dx,dy);
// 	}

// 	set_acceleration(fx, fy) {
// 		this.a = createVector(fx,fy);
// 	}

	update(dt) {
		// define for now as just rotating around a central point
		// this.a = p5.Vector.mult(this.q, -1);
		// this.v.add( p5.Vector.mult(this.a, dt));
		this.q.add( p5.Vector.mult(this.v, dt));

		if (this.q.x>this.xmax/2 || this.q.x<-this.xmax/2 ){
			this.v.x *= -1;
		}
		if (this.q.y>this.ymax/2 || this.q.y<-this.ymax/2 ){
			this.v.y *= -1;
		} 

		// console.log('a', this.a);
		// console.log('v', this.v);
		// console.log('q', this.q);
	}

}