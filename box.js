var box_options;

class Box {
  constructor(x,y,width,height){
    box_options = {
      restitution: 0.1 ,friction: 0.8
    }
    this.body=Bodies.rectangle(x,y,width,height,box_options)
    this.width = width;
    this.height = height;

    World.add(world,this.body) 
  }

  display(){
    var angles = this.body.angle
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angles)

    rectMode(CENTER)
    rect(0,0,this.width,this.height)

    pop();

  }
  
}
