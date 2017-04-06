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

var Time = 0;

var colorArray = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'cyan'];
// Mode of movement
MoveMode = {
  CLOCKWISE : 0,
  COUNTERCLOCK : 1,
  SINE : 2,
  COSINE : 3
}

class Circle {
  constructor( parX, parY, Color = 'green', Delay = 0, Mode = MoveMode.CLOCKWISE, Rad = 40 ) {
    this.x = parX;
    this.y = parY;
    this.radius = Rad;
    this.color = Color;
    self.delay = Delay;
    this.mode = Mode;
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
    switch ( this.mode ) {
      case MoveMode.CLOCKWISE:
        this.clockwise
        break;
      case MoveMode.COUNTERCLOCK:
        this.counterclock
        break;
      case MoveMode.SINE:
        this.sine
        break;
      case MoveMode.COSINE:
        this.cosine
        break;
      default:
        break;
    }
    this.draw();
  }
}

function pickColor() {
  return colorArray[ Math.floor( Math.random() * colorArray.size ) ];
}

function move_balls() {
  var balls = [];

  var ball = new Circle( 100, 100, 'green', 0, MoveMode.CLOCKWISE );
  ball.draw();

  ball.setPos( 200, 200 );
  ball.draw();
  // Populate array with balls.
  for (var i = 0; i < 11; ++i){
    balls.push( new Circle() );
  }
}

move_balls();
