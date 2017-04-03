// All the globals.

var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
// Canvas dimensions.
var width = canvas.width;
var height = canvas.height;
// Center of the canvas.
var centerX = width/2;
var centerY = height/2;
// The radius of the circle along which balls spin.
var ray = 80;
//
var time = 0;
// The X positions of the sine and cosine balls.
var sinexpos = -40;
var cosinexpos = -120;
// The modifier of the sine and cosine tracks.
var sinepower = 150
// Speed of the animation.
var pace = 50;

// END of globals.

function drawCircle( parX, parY, fillStyle = 'green' ) {
  var radius = 30;
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
  var angle = 0;
  var posX = 0;
  var posY = 0;
  // Note to self, uses radians.
  posY = Math.sin( Time * Math.PI ) * ray + centerY;
  posX = Math.cos( Time * Math.PI ) * ray + centerX;

  drawCircle( posX, posY, 'pink' );
  drawCircle( posY, posX, 'cyan' );
}

function sineWaveBall() {
  var ypos = 150 + Math.sin( sinexpos ) * sinepower;
  //alert( ypos );
  drawCircle( sinexpos, ypos, 'red' );
  //sinexpos += 5;
}

function cosineWaveBall() {
  var ypos = 150 + Math.cos( sinexpos ) * sinepower;
  //alert( ypos );
  drawCircle( sinexpos, ypos, 'blue' );
  //sinexpos += 5;
}

function drawOnTime() {
  // Clear the canvas.
  context.clearRect(0, 0, canvas.width, canvas.height);
  spinBall( time );
  sineWaveBall();
  cosineWaveBall();
  sinexpos += 5;
  cosinexpos += 5;
  if (sinexpos > (40 + canvas.width) ) {
    sinexpos = -40;
  }
  if ( cosinexpos > (40 + canvas.width) ) {
    cosinexpos = -40;
  }
  time += 1/8;
}

function main() {
  setInterval(drawOnTime, pace);
}

main();
