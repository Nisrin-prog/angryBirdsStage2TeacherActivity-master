class Pig {
  //special function that runs when an object is created
  constructor(x,y){
    var options = {
      restitution : 0.8,
      density :1,
      friction : 0.04
    }
    this.body = Bodies.rectangle (x,y,50,50,options)
    this.width = 50
    this.height = 50
    World.add(world,this.body)
  }
  display(){
    var pos = this.body.position
    rectMode(CENTER)
    fill("green")
    rect(pos.x,pos.y,this.width,this.height)
  }
};