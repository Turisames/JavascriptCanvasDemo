var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

// Adjust canvas size.
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;
// Canvas dimensions.
var width = canvas.width;
var height = canvas.height;
// Center of the canvas.
var centerX = width/2;
var centerY = height/2;

class Circle {
  constructor( parX, parY, Rad = 30, Color = 'green' ) {
    this.x = parX;
    this.y = parY;
    this.radius = Rad;
    this.color = Color;
  }

  draw(){
    context.beginPath();
    context.arc( this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = this.color;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
  }

  setPos( parX, parY ){
    this.x = parX;
    this.y = parY;
  }

  clockwise(){
    this.x = centerX + Math.cos( Time * Math.PI ) * ray;
    this.y = centerY + Math.sin( Time * Math.PI ) * ray;
  }

  counterclock(){
    this.x = width - (centerX + Math.cos( Time * Math.PI ) * ray);
    this.y = centerY + Math.sin( Time * Math.PI ) * ray;
  }

  sineroute(){
    this.y = centerY + Math.sin( sinexpos ) * sinepower;
  }

  cosineroute(){
    this.y = centerY + Math.cos( sinexpos ) * sinepower;
  }

  update(){

  }

}
