class Slime{
	constructor(xmax,ymax){
		this.xmax = xmax;
		this.ymax = ymax;

		var x = random(-xmax/2, xmax/2);
		var y = random(-ymax/2, ymax/2);

		this.q = createVector(x,y);
		this.v = p5.Vector.random2D().mult(50);
		this.col = new RandomColor();
		this.size = 5;
		this.vision_radius = 1.25*this.size;
		this.vision_perhiperal = radians(15);

		// console.log( this.q.x, this.q.y );
	}

	setPosition(vec){
		this.q = vec;
	}

	setHeading(vec){
		this.v = vec;
		this.v.normalize().mult(50);
	}

	draw(g) {
		// slime itself
		noStroke();
		g.fill(this.col.rgba_string());
		g.ellipse(this.q.x,this.q.y,this.size,this.size);

		// velocity line
		// g.stroke(this.col.rgba_string());
		// g.line(this.q.x,this.q.y,this.q.x+this.v.x,this.q.y+this.v.y);		

		// fill(255, 60, 100);
  		// text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
	}

	update(dt,g) {
		this.#update_heading(dt,g);

		this.q.add( p5.Vector.mult(this.v, dt));

		if (this.q.x>this.xmax/2 || this.q.x<-this.xmax/2 ){
			this.v.x *= -1;
		}
		if (this.q.y>this.ymax/2 || this.q.y<-this.ymax/2 ){
			this.v.y *= -1;
		}
	}

	#update_heading(dt,g) {
		// origin rotated vision vectors
		let peek_fwd = p5.Vector.normalize(this.v).mult(this.vision_radius);
		let peek_lft = p5.Vector.rotate(peek_fwd, -this.vision_perhiperal);
		let peek_rgt = p5.Vector.rotate(peek_fwd,  this.vision_perhiperal);
		// push to q location
		peek_fwd.add(this.q);
		peek_lft.add(this.q);
		peek_rgt.add(this.q);

		// g.stroke(255);
		g.fill(255);
		
		// g.line(this.q.x, this.q.y, peek_fwd.x, peek_fwd.y);
		// g.line(this.q.x, this.q.y, peek_lft.x, peek_lft.y);
		// g.line(this.q.x, this.q.y, peek_rgt.x, peek_rgt.y);
		
		// g.circle( peek_fwd.x, peek_fwd.y, 5 );
		// g.circle( peek_lft.x, peek_lft.y, 5 );
		// g.circle( peek_rgt.x, peek_rgt.y, 5 );

		let c_fwd = g.get(peek_fwd.x + g.width/2, peek_fwd.y + g.height/2);
		let c_lft = g.get(peek_lft.x + g.width/2, peek_lft.y + g.height/2);
		let c_rgt = g.get(peek_rgt.x + g.width/2, peek_rgt.y + g.height/2);

		c_fwd = (c_fwd[0]+c_fwd[1]+c_fwd[2]) * c_fwd[3];
		c_lft = (c_lft[0]+c_lft[1]+c_lft[2]) * c_lft[3];
		c_rgt = (c_rgt[0]+c_rgt[1]+c_rgt[2]) * c_rgt[3];

		//head to brightness?
		if ( (c_lft > c_fwd) && (c_lft > c_rgt) ){
			this.v.rotate(-this.vision_perhiperal);
		}
		else if (c_rgt > c_fwd) {
			this.v.rotate(this.vision_perhiperal);
		}


	}



}
