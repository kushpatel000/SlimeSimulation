class Slime{
	constructor(xmax,ymax,cidx){
		this.xmax = xmax;
		this.ymax = ymax;

		// random q0
		var x = random(-xmax/2, xmax/2);
		var y = random(-ymax/2, ymax/2);
		// bind y loc to strata
		// var n_strata = 10;
		// var y = Math.floor( random(-n_strata/2,n_strata/2) )*ymax/n_strata;
		// var x = Math.floor( random(-n_strata/2,n_strata/2) )*xmax/n_strata;
		
		this.q = createVector(x,y);
		
		this.vel = 50.0;

		this.size = 3;
		this.vision_radius = 1.5*this.size;
		// this.vision_perhiperal = radians(15);
		this.vision_perhiperal = radians(30);
		
		// this.v = p5.Vector.random2D().mult(this.vel);
		// bind velocities to specific angles
		let n_angles = Math.floor( radians(360)/this.vision_perhiperal );
		this.v = createVector(1,0).mult(this.vel);
		let rand_heading = Math.floor(random()*n_angles);
		this.v.setHeading( rand_heading*this.vision_perhiperal );
		
		let repl = -30;
		let attr = 10;
		switch (cidx) {
			case 0: // cyan
				this.col = "#00FFFF50";
				this.tgt = [repl,attr,attr];
				break;
			case 1: // magenta
				this.col = "#FF00FF50";
				this.tgt = [attr,repl,attr];
				break;
			case 2: // yellow
				this.col = "#FFFF0050";
				this.tgt = [attr,attr,repl];
		}
			
		// this.rand_limit = HALF_PI;
		// console.log( this.q.x, this.q.y );
	}

	setPosition(vec){
		this.q = vec;
	}

	setHeading(vec){
		this.v = vec;
		this.v.normalize().mult(this.vel);
	}

	draw(g) {
		// slime itself
		noStroke();
		g.fill(this.col);
		g.ellipse(this.q.x,this.q.y,this.size,this.size);

		// velocity line
		// g.stroke(this.col.rgba_string());
		// g.line(this.q.x,this.q.y,this.q.x+this.v.x,this.q.y+this.v.y);		

		// fill(255, 60, 100);
  		// text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
	}

	update(dt,g,pixels) {
		this.#update_heading(g, pixels);

		this.q.add( p5.Vector.mult(this.v, dt));

		if (this.q.x>this.xmax/2 || this.q.x<-this.xmax/2 ){
			// this.v.x *= -1; // reflect
			this.q.x *= -1; //pass through
		}
		if (this.q.y>this.ymax/2 || this.q.y<-this.ymax/2 ){
			// this.v.y *= -1; // reflect
			this.q.y *= -1; //pass through
		}
	}

	#update_heading(g, pixels) {
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
		
		// g.circle( peek_fwd.x, peek_fwd.y, 1 );

		// let c_fwd = g.get(peek_fwd.x + g.width/2, peek_fwd.y + g.height/2);
		// let c_lft = g.get(peek_lft.x + g.width/2, peek_lft.y + g.height/2);
		// let c_rgt = g.get(peek_rgt.x + g.width/2, peek_rgt.y + g.height/2);

		// c_fwd = (c_fwd[0]+c_fwd[1]+c_fwd[2]) * c_fwd[3];
		// c_lft = (c_lft[0]+c_lft[1]+c_lft[2]) * c_lft[3];
		// c_rgt = (c_rgt[0]+c_rgt[1]+c_rgt[2]) * c_rgt[3];

		// console.log('peek_fwd',peek_fwd.x, peek_fwd.y);
		// console.log('peek_fwd, shifted',peek_fwd.x + g.width/2, peek_fwd.y + g.height/2)

		// console.log( 'get',c_fwd );
		// console.log( 'pixels',pixels.slice(i_fwd,i_fwd+4) );
		// console.log('##############################')

		let i_fwd = this.#pos_to_pixel( peek_fwd, g );
		let i_lft = this.#pos_to_pixel( peek_lft, g );
		let i_rgt = this.#pos_to_pixel( peek_rgt, g );

		// dot product of color * target
		let c_fwd = 0, c_lft = 0, c_rgt = 0;
		for (let i = 0; i < 3; i ++){
			c_fwd += pixels[i_fwd+i] * this.tgt[i];
			c_lft += pixels[i_lft+i] * this.tgt[i];
			c_rgt += pixels[i_rgt+i] * this.tgt[i];
		}
		// scale by opacity
		c_fwd *= pixels[i_fwd+3];
		c_lft *= pixels[i_lft+3];
		c_rgt *= pixels[i_rgt+3];


		//head to largest dot
		if ( (c_lft > c_fwd) && (c_lft > c_rgt) ){
			this.v.rotate(-this.vision_perhiperal);
		}
		else if (c_rgt > c_fwd) {
			this.v.rotate(this.vision_perhiperal);
		}

		// add some random rotation
		// let rand_theta = (Math.random() - 0.5) * this.rand_limit;
		// this.v.rotate(rand_theta);

	}

	#pos_to_pixel( vec, g ) {
		let xx = int(vec.x + g.width/2 );
		xx = max(min( xx, g.width-1 ), 0);
		let yy = int(-vec.y + g.height/2);
		yy = max(min( yy, g.height-1 ), 0);
		// console.log(xx,yy, (yy*g.width + xx) * 4);
		return (yy*g.width + xx) * 4;
	}



}
