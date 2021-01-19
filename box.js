class Box  {
    constructor(x,y,width,height){
     
     var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          
          isStatic : true
      }  
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
   //this.image=loadImage("sprites/dustbingreen.png")

      World.add(world,this.body);
    }
    display(){
    //  image(this.image,200,300);
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white");
      fill(255);
      rect(0,0,this.width,this.height);
      //image(this.image,0,0,this.width,this.height);
      pop();
    }
}
