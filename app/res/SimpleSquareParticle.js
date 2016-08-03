// Simple class example

function SimpleSquareParticle(posX, posY) {
		this.x = posX;
		this.y = posY;
		this.zmap = 0;
		this.velX = 0;
		this.velY = 0;
		this.accelX = 0;
		this.accelY = 0;
		this.color = "#FF0000";
		this.radius = 10;
		this.name = 'Toto';
		this.type = '';
}

//The function below returns a Boolean value representing whether the point with the coordinates supplied "hits" the particle.
SimpleSquareParticle.prototype.hitTest = function(hitX,hitY) {
	return((hitX > this.x - this.radius)&&(hitX < this.x + this.radius)&&(hitY > this.y - this.radius)&&(hitY < this.y + this.radius));
}

//A function for drawing the particle.
SimpleSquareParticle.prototype.drawToContext = function(theContext) {
	theContext.fillStyle = this.color;
	theContext.fillRect(this.x - this.radius, this.y - this.radius, 2*this.radius, 2*this.radius);
	theContext.fillStyle = "black"; // font color to write the text with
	var font = "bold 13px serif";
	theContext.font = font; // specify the font
	theContext.textBaseline = "middle"; // set the baseline as top
	theContext.textAlign = 'center';
	theContext.fillText(this.name, this.x ,this.y); // render the text with its x and y coordinate
}
