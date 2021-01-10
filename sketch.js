

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


function preload(){

  bgImage=loadImage("sprites/bg.jpg");

}

function setup() {
	createCanvas(1600,600);


	engine = Engine.create();
	world = engine.world;


  ball=new Ball(50,100);
  slingshot=new Sling(ball.body,{x:150,y:200});

  box1=new Box(560,350);
  box2=new Box(610,350);
  box3=new Box(670,350);
  box4=new Box(700,350);

  box6=new Box(590,320);
  box7=new Box(640,320);
  box8=new Box(690,320);

  box9=new Box(610,290);
  box10=new Box(670,290);

  box5=new Box(640,260);

  box11=new Box(1170,270);
  box12=new Box(1200,270);
  box13=new Box(1230,270);
  
  box14=new Box(1180,210);
  box15=new Box(1210,210);

  box16=new Box(1200,150);







  gd1=new Ground(800,550,1900,80);
  gd2=new Ground(650,450,400,50);
  gd3=new Ground(1200,300,300,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImage);
  Engine.update(engine);

  
 
  ball.display();

  slingshot.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();





  gd1.display();
  gd2.display();
  gd3.display();
 
}


function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  
  
}


function mouseReleased(){
  slingshot.fly();
  Matter.Body.setPosition(ball.body,{x:ball.body.position.x,y:ball.body.position.y})

}

