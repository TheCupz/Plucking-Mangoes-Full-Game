
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy = loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
  tree = new Tree(870,460,550,600)
	//boy = new Boy(130,510,250,300);
	rock = new Rock(180,540,60);
  throwing = new Throwing(rock.body,{x:180, y:540});
  mango1 = new Mango(800,350,60);
  mango2 = new Mango(700,350,60);
  mango3 = new Mango(850,250,60);
  mango4 = new Mango(950,280,60);
  mango5 = new Mango(1050,280,60); 
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(125);
  //displaying the Bodies here:
  image(boy,130,460,250,300);
  ground.display();
  tree.display();
  //boy.display();
  rock.display();
  throwing.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  //rect(670,150,550,600);
  detectCollision(rock,mango1);
  detectCollision(rock,mango2);
  detectCollision(rock,mango3);
  detectCollision(rock,mango4);
  detectCollision(rock,mango5);
 
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x: mouseX , y: mouseY});
    console.log("dragged");
}

function mouseReleased(){
    throwing.fly();
    console.log("released");
}

function detectCollision(rock,mango){
  mangoBodyPosition = mango.body.position
  rockBodyPosition = rock.body.position

  var distance = dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=mango.r+rock.r){
    Matter.Body.setStatic(mango.body,false);
  }
}



