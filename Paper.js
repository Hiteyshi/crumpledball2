class Paper {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.2,
          'friction':0,
          'density':1.2
      }
     this.image=loadImage('paper.png')
      this.body = Bodies.circle(x, y,(radius-20)/2,options);
      this.r=radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     push ();
     translate(pos.x,pos.y);
     rotate(angle);
      fill ("purple")
     //circle(pos.x,pos.y,this.r);
     image (this.image,0,0,this.r,this.r)
      pop ();
    }
  };
  