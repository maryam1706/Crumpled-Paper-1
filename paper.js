class Paper  {
    constructor(x,y){
        var options = {
            restitution : 1.0,
            friction : 0.3,
            density : 0.8
        }
     
    this.body = Bodies.circle(x,y,20,options); 
    this.radius=20;   
    World.add(world,this.body); 
    }

    display(){
        var pos = this.body.position;
       // translate(pos.x,pos.y);

        fill ("purple")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
  }