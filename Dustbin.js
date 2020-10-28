class Dustbin {
    constructor(x, y) {
      var options = {
        isStatic:true
          
      }
      this.width=200;
      this.height=213;
      this.thickness=20;
      this.image=loadImage('dustbingreen.png')
      this.bottombody = Bodies.rectangle(x, y, this.width,this.thickness, options);
      this.leftbody = Bodies.rectangle(x-this.width/2, y-this.height/2, this.thickness,this.height, options);
      this.rightbody = Bodies.rectangle(x+this.width/2, y-this.height/2, this.thickness,this.height, options);
      World.add(world, this.bottombody);
      World.add(world, this.rightbody);
      World.add(world, this.leftbody);
    }
    display(){
      var bottompos =this.bottombody.position;
      var rightpos =this.rightbody.position;
      var leftpos =this.leftbody.position;
      var angle = this.angle;
      rectMode(CENTER);
      /*push();
      translate(leftpos.x,leftpos.y);
      rotate(angle);
      pop();
      push();
      translate(rightpos.x,rightpos.y);
      rotate(-1*angle);
      pop();*/
      push();
      translate(bottompos.x,bottompos.y+10);
      //rotate(angle);
     image(this.image,0,-this.height/2,this.width,this.height);
      pop();
      //fill ("red")
      //rect(pos.x,pos.y,this.width, this.height);
     
    }
  };
  