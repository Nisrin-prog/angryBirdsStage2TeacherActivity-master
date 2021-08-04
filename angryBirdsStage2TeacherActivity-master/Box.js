class Box {
  //special function that runs when an object is created
  constructor(x,y,width,height){
    var options = {
      restitution : 0.8,
      density :1,
      friction : 1
    }
    this.body = Bodies.rectangle (x,y,width,height,options)
    this.width = width
    this.height = height
    World.add(world,this.body)
  }
  display(){
    var pos = this.body.position
    rectMode(CENTER)
    fill("yellow")
    rect(pos.x,pos.y,this.width,this.height)
  }
};