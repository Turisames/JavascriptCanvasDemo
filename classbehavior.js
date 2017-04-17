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

var TIME = 0;
var balls = [];

var colorArray = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'cyan'];
// Mode of movement
MoveMode = {
  CLOCKWISE : 0,
  COUNTERCLOCK : 1,
  SINE : 2,
  COSINE : 3
}

SpreadPattern = {
  SLOW : 1,
  MEDIUM : 2,
  FAST : 3,
  SINEACCENTER : 4,
  SINEACCEDGE : 5
}

class Circle {
  constructor( parX, parY, Color = 'green', Delay = 0,
     Mode = MoveMode.CLOCKWISE, Rad = 40, Ray = canvas.height/3 ) {
    this.x = parX;
    this.y = parY;
    // The radius of a ball.
    this.radius = Rad;
    this.color = Color;
    this.delay = Delay;
    this.mode = Mode;
    // The radius of the circle along which balls spin.
    this.ray = Ray;
    this.spread = SpreadPattern.MEDIUM;
  }

  setMode( Mode = MoveMode.CLOCKWISE ){
    this.mode = Mode;
  }

  setSpread( Pattern ){
    this.spread = Pattern;
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
    this.x = centerX + Math.cos( this.delay * Math.PI ) * this.ray ;
    this.y = centerY + Math.sin( this.delay * Math.PI ) * this.ray ;
  }

  counterclock(){
    this.x = width - (centerX + Math.cos( this.delay * Math.PI ) * this.ray);
    this.y = centerY + Math.sin( this.delay * Math.PI ) * this.ray;
  }

  sineroute(){
    // TODO: Implement sinepower .
    this.y = canvas.height/2 + Math.sin( this.x / 50  ) * 150;
    this.x += 10;
    if ( canvas.width < this.x){
      this.x = 0;
    }
  }

  cosineroute(){
    // TODO: Implement sinepower .
    this.y = canvas.height/2 + Math.cos( this.x / 50 ) * 150;
    this.x += 10;
    if ( canvas.width < this.x){
      this.x = 0;
    }
  }
  
  spread(){
    switch ( this.spread ){
      case SpreadPattern.SLOW:
        this.ray += 1;
      case SpreadPattern.MEDIUM:
        this.ray += 3;
      case SpreadPattern.FAST:
        this.ray += 6;
      case SpreadPattern.SINEACCENTER:
        var margin = canvas.width - this.x;
      case SpreadPattern.SINEACCEDGE:

      default:
        break;
    }
  }

  update(){
    this.delay += 1/8;
    
    switch ( this.mode ) {
      case MoveMode.CLOCKWISE:
        this.clockwise();
        break;
      case MoveMode.COUNTERCLOCK:
        this.counterclock();
        break;
      case MoveMode.SINE:
        this.sineroute();
        break;
      case MoveMode.COSINE:
        this.cosineroute();
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

function update_balls(){

  // Clear the canvas.
  context.clearRect(0, 0, canvas.width, canvas.height);

  for( var i = 0; i < balls.length; ++i ){
    balls[ i ].update();
  }
}

function move_balls() {

  // Populate array with balls.
  for (var i = 0; i < 11; ++i){
    balls.push( new Circle(200, 200, 'green', i/8, MoveMode.CLOCKWISE ) );
  }
  balls.push( new Circle( 0, 150, 'red', 0, MoveMode.SINE ) );
  balls.push( new Circle( 0, 150, 'blue', 0, MoveMode.COSINE ) );

  // Important.
  // Start doing the actual animation.
  setInterval( update_balls , 50 );
}

move_balls();
