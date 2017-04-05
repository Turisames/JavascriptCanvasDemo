
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

  update(){

  }

}
