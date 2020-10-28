
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground,d1;
var engine,world;



function setup() {
 createCanvas(1600, 700);
 engine = Engine.create();
  world = engine.world;
ground=new Ground(800,670,width,20);	
d1=new Dustbin(1200,650);
paper=new Paper(200,450,70);
	Engine.run(engine);
  
}
function draw() {
  
background(230);
Engine.update(engine); 
paper.display();
ground.display();
  d1.display();
 
}
function keyPressed() {
	 if (keyCode===UP_ARROW)
	 {
		  Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-400}) 
	} 
	}




