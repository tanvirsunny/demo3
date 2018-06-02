const tilt = $('.about-us-image').tilt()
tilt.on('change', function(e, transforms){});


window.requestAnimFrame = (function() {
				return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
	  window.setTimeout(callback, 1000 / 60);
	};
})();

window.requestAnimFrame = (function() {
				return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
  function(callback) {
	  window.setTimeout(callback, 1000 / 60);
	};
})();

var canvas;
var ctx;
var WIDTH;
var HEIGHT;
var leftEye,rightEye;
var mouse;

Eye = function(pos) {
  this.pos = {
		x : pos.x,
		y : pos.y
	};
	this.center = {
		x : pos.x,
		y : pos.y
	};
	this.translation = {
		x : (window.innerWidth / 2 - canvas.width / 10) + this.center.x,
		y :(window.innerWidth / 2 - canvas.width / 10) + this.center.y
  };
	this.newPos = {x : this.pos.x, y : this.pos.y};
}

Eye.prototype.draw = function() {
  ctx.beginPath();
	ctx.arc(this.pos.x, this.pos.y, 7, 0, Math.PI * 2);
	ctx.fillStyle = '#fff';
	ctx.fill();
}

Eye.prototype.update = function() {
	var deltaX = mouse.x - this.translation.x;
	var deltaY = mouse.y - this.translation.y;
	var mag = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
	var angleRad = Math.atan2(deltaY, deltaX);
	this.newPos.x = 10 * Math.cos(angleRad);
	this.newPos.y = 19 * Math.sin(angleRad);
  this.newPos.x += this.center.x;
	this.newPos.y += this.center.y;
	this.pos.x +=(this.newPos.x-this.pos.x)/5;
	this.pos.y +=(this.newPos.y-this.pos.y)/5;
}
			
var init = function() {
  canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	canvas.width = WIDTH = 300;
	canvas.height = HEIGHT = 125;
	leftEye = new Eye({
	  x : WIDTH / 2 - 100,
		y : HEIGHT / 2 + 18
	});
	rightEye = new Eye({
		x : WIDTH / 2 + 8,
		y : HEIGHT / 2 + 18
	});
	mouse = {
		x : 0,
		y : 0
	};
	bindEventHandlers();
	draw();
}
    
var draw = function() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
	leftEye.update();
	rightEye.update();
	leftEye.draw();
	rightEye.draw();
  requestAnimFrame(draw);
}
    
var bindEventHandlers = function() {
  document.onmousemove = function(e) {
	  mouse.x = e.pageX;
		mouse.y = e.pageY;
	}
}

init();