class Log {
  //special function that runs when an object is created
  constructor(x,y,height,angle){
    var options = {
      restitution : 0.8,
      density :1,
      friction : 1
    }
    this.body = Bodies.rectangle (x,y,20,height,options)
    Matter.Body.setAngle(this.body,angle)
    this.width = 20
    this.height = height
    World.add(world,this.body)
    
  }
  display(){
    var pos = this.body.position
    var angle = this.body.angle
    push ()
    rectMode(CENTER)
    translate (pos.x,pos.y)
    rotate (angle)
    fill("red")
    rect(0,0,this.width,this.height)
    pop ()
  }
};

  