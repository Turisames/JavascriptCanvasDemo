var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

function drawCircle( centerX, centerY ) {
  var radius = 70;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'green';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = '#003300';
  context.stroke();
}

function spinBall() {
  var angle = 0;
  posX = 0;
  posY = 0;
}

function main() {
  drawCircle( 10, 10 );
}

main();
