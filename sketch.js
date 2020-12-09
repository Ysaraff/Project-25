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
	ball1 = new Ball();

	dustbin1 = new Dustbin(635,587);

	ground1 = new Ground(400,645,800,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ball1.display();	

  dustbin1.display();

  ground1.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:67,y:-75});
		}
	}



