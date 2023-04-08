class RandomColor{
	constructor(){
		// this.r = this.#random_scale();
		// this.g = this.#random_scale();
		// this.b = this.#random_scale();

		this.r = 0;
		this.g = 0; //255 * Math.round(Math.random());
		this.b = 255 - this.g;
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

