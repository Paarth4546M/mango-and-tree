
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree_img,tree;
var ground;
var boy_img;

function preload(){
	tree_img = loadImage("Plucking mangoes/tree.png")
	boy_img = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = createSprite(560,440,10,10)
	tree.addImage(tree_img)
	tree.scale = 0.4

	boy = createSprite(100,630,10,10)
	boy.addImage(boy_img)
	boy.scale = 0.1

	ground = Bodies.rectangle(400,690,800,5,{isStatic:true})
    World.add(world,ground)

	mango1 = new Mango(350,400)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(170);

  mango1.display();

  rect(ground.position.x,ground.position.y,800,5)
 
  
  drawSprites();
 
}



