// All the globals.

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
// The radius of a ball.
var radius = 30;
// The radius of the circle along which balls spin.
var ray = height/3;
//
var time = 0;
// The X positions of the sine and cosine balls.
var sinexpos = -40;
var cosinexpos = -120;
// The modifier of the sine and cosine tracks.
var sinepower = canvas.height * 1/9;
// Speed of the animation.
var pace = 50;

// END of globals.

function drawCircle( parX, parY, fillStyle = 'green' ) {
  context.beginPath();
  context.arc( parX, parY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = fillStyle;
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = '#003300';
  context.stroke();
}

// Takes time in ms, determines position accordingly.
function spinBall( Time = 0 ) {
  // Note to self, uses radians.
  var posX = centerX + Math.cos( Time * Math.PI ) * ray;
  var posY = centerY + Math.sin( Time * Math.PI ) * ray;

  drawCircle( posX, posY, 'pink' );
  drawCircle( width - posX, posY, 'cyan' );
}

function sineWaveBall() {
  var ypos = centerY + Math.sin( sinexpos ) * sinepower;
  //alert( ypos );
  drawCircle( sinexpos, ypos, 'red' );
  //sinexpos += 5;
}

function cosineWaveBall() {
  var ypos = centerY + Math.cos( sinexpos ) * sinepower;
  //alert( ypos );
  drawCircle( sinexpos, ypos, 'blue' );
  //sinexpos += 5;
}

function drawOnTime() {
  // Adjust canvas size.
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  sinepower = canvas.height * 1/9;

  // Clear the canvas.
  context.clearRect(0, 0, canvas.width, canvas.height);
  spinBall( time );
  sineWaveBall();
  cosineWaveBall();
  sinexpos += 5;
  cosinexpos += 5;
  if (sinexpos > (radius + canvas.width) ) {
    sinexpos = -radius;
  }
  if ( cosinexpos > (radius + canvas.width) ) {
    cosinexpos = -radius;
  }
  time += 1/8;
}

function main() {
  setInterval(drawOnTime, pace);
}

main();
