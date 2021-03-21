const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here. 
	paper = new paper(150,600,10);
	
	ground = new ground (400,680,800,20);

	leftside = new dustbin (550,620,20,100);
	rightside = new dustbin (670,620,20,100);
	bottomside = new dustbin (610,660,100,20);

	keyPressedGroup = new Group();   

	Engine.run(engine);

  
}


function draw(){

  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();
  ground.display();

  bottomside.display();
  leftside.display();
  rightside.display();
  
  
  drawSprites();
}


function keyPressed(){
	 if (keyCode === UP_ARROW){
		  
		Matter.Body.applyForce(paper.body,paper.body.postion,{x:85,y:-85});
		
	 }
}
