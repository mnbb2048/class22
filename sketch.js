const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
var engine,world,object

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var op={
    isStatic:1
  }
  var op1={
    restitution:1
  }
  object=Bodies.rectangle(200,390,50,50,op);
  ball=Bodies.circle(200,200,30,op1);
  World.add(world,ball)
  World.add(world,object);
  console.log(object.position.x);
}

function draw() {
  background(1);
  Engine.update(engine)
  rectMode(CENTER);  
  rect(object.position.x,object.position.y,400,10);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30);
  drawSprites();
}