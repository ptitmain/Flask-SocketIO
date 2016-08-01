// Simple class example

function SimpleDiskParticle(posX, posY) {
		this.x = posX;
		this.y = posY;
		this.velX = 0;
		this.velY = 0;
		this.accelX = 0;
		this.accelY = 0;
		this.color = "#FF0000";
		this.radius = 10;
		this.name = 'JFL';
}

//The function below returns a Boolean value representing whether the point with the coordinates supplied "hits" the particle.
SimpleDiskParticle.prototype.hitTest = function(hitX,hitY) {
	var dx = this.x - hitX;
	var dy = this.y - hitY;
	
	return(dx*dx + dy*dy < this.radius*this.radius);
}

//A function for drawing the particle.
SimpleDiskParticle.prototype.drawToContext = function(theContext) {
	theContext.fillStyle = this.color;
	theContext.beginPath();
	theContext.arc(this.x, this.y, this.radius, 0, 2*Math.PI, false);
	theContext.closePath();
	theContext.fill();

	theContext.fillStyle = "black"; // font color to write the text with
	var font = "bold 13px serif";
	theContext.font = font; // specify the font
	theContext.textBaseline = "middle"; // set the baseline as top
	theContext.textAlign = 'center';
	theContext.fillText(this.name, this.x ,this.y); // render the text with its x and y coordinate
}
