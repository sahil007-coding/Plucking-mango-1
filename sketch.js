
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var stone,slingshot,treeImg, tree;
var mango, mango1, mango2, mango3, mango4, mango5 ;
function preload()
{
	treeImg = loadImage("SPRITES/tree.png");
}

function setup() {
	createCanvas(800, 700);

s
	engine = Engine.create();
    world = engine.world;
	ground = new Ground(600,height,1200,20);
	
	tree=createSprite(150,150,200,200);
	tree.scale=1.5;
	stone = new Stone(100,100);
	slingshot = new Slingshot(stone.body,{x:200,y:100});
	mango= new Mango(155,150,100,100);
	mango1= new Mango(210,150,100,100);
	mango2= new Mango(155,100,100,100);
	mango3= new Mango(210,100,100,100);
	mango4= new Mango(175,125,100,100);
	mango5= new Mango(190,100,100,100);
}
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 platform.display();
 slingshot.display();
 stone.display();
 tree.display();
 mango.display();
 mango5.display();
 mango1.display();
 mango2.display();
mango3 .display();
mango4.display();

}



