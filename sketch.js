
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
groundbase = new ground(400,680,800,20)
parede1 = new ground(650,623,20,100)
parede2 = new ground(450,623,20,100)
ball = Bodies.circle(200,50,20)
World.add(world,ball)
	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0.009,y:-0.015})
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 groundbase.display()
 parede1.display()
 parede2.display()
 ellipse(ball.position.x,ball.position.y,20,20)
}



