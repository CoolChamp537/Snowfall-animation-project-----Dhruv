const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var BGImage;
var flake1,flake2,flake3,flake4,flake5,flake6,flake7,flake8,flake9,flake10;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10;

var boy,boyImg,boyImg2;
var ground;
var sound;

function preload(){
  BGImage = loadImage("snow1.jpg")
  boyImg1 = loadAnimation("boy1.jpg");
  boyImg2 = loadAnimation("boy2.jpg")
  boyImg3 = loadAnimation("boy1 flipped.jpg")
  boyImg4 = loadAnimation("boy2 flipped.jpg")
  boyImg5 = loadAnimation("boy jumping.jpg")
  boyImg6 = loadAnimation("boy jumping flipped.jpg")
  sound = loadSound("music.mp3")
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  flake1 = new Snowflake(Math.round(random(0,1150)),-50,40,40)
  flake1.scale = 0.15;

  flake2 = new Snowflake(Math.round(random(0,1150)),-60,40,40)
  flake2.scale = 0.15;
  
  flake3 = new Snowflake(Math.round(random(0,1150)),-20,40,40)
  flake3.scale = 0.15;

  flake4 = new Snowflake(Math.round(random(0,1150)),-70,40,40)
  flake4.scale = 0.15;

  flake5 = new Snowflake(Math.round(random(0,1150)),-90,40,40)
  flake5.scale = 0.15;

  flake6 = new Snowflake(Math.round(random(0,1150)),-20,40,40)
  flake6.scale = 0.15;

  flake7 = new Snowflake(Math.round(random(0,1150)),-40,40,40)
  flake7.scale = 0.15;

  flake8 = new Snowflake(Math.round(random(0,1150)),-20,40,40)
  flake8.scale = 0.15;

  flake9 = new Snowflake(Math.round(random(0,1150)),-50,40,40)
  flake9.scale = 0.15;

  flake10 = new Snowflake(Math.round(random(0,1150)),-100,40,40)
  flake10.scale = 0.15;

  ball1 = new Snowball(Math.round(random(0,1150)),-50,40,40)
  ball1.scale = 0.15;

  ball2 = new Snowball(Math.round(random(0,1150)),-60,40,40)
  ball2.scale = 0.15;
  
  ball3 = new Snowball(Math.round(random(0,1150)),-20,40,40)
  ball3.scale = 0.15;

  ball4 = new Snowball(Math.round(random(0,1150)),-70,40,40)
  ball4.scale = 0.15;

  ball5 = new Snowball(Math.round(random(0,1150)),-90,40,40)
  ball5.scale = 0.15;

  ball6 = new Snowball(Math.round(random(0,1150)),-20,40,40)
  ball6.scale = 0.15;

  ball7 = new Snowball(Math.round(random(0,1150)),-40,40,40)
  ball7.scale = 0.15;

  ball8 = new Snowball(Math.round(random(0,1150)),-20,40,40)
  ball8.scale = 0.15;

  ball9 = new Snowball(Math.round(random(0,1150)),-50,40,40)
  ball9.scale = 0.15;

  ball10 = new Snowflake(Math.round(random(0,1150)),-100,40,40)
  ball10.scale = 0.15;

  boy = createSprite(100,500,180,200);
  boy.addAnimation("standing",boyImg1);
  boy.addAnimation("running",boyImg2);
  boy.addAnimation("standing flipped",boyImg3);
  boy.addAnimation("running flipped",boyImg4);
  boy.addAnimation("jumping",boyImg5);
  boy.addAnimation("jumping flipped",boyImg6);
  boy.scale = 0.5;
  boy.debug = false
  boy.setCollider("aabb",0,0,150,400)

  ground = createSprite(600,height-100,width,5);

  sound.play();
  
}

function draw() {

  background(BGImage); 
  
  Engine.update(engine);

  flake1.display();
  flake2.display();
  flake3.display();
  flake4.display();
  flake5.display();
  flake6.display();
  flake7.display();
  flake8.display();
  flake9.display();
  flake10.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();
  ball10.display();

  boy.display();
  boy.debug = false
  
  //ground.display();


  if(flake1.body.position.y > 700){
    Matter.Body.setPosition(flake1.body,{x: Math.round(random(0,1150)),y: -50});
  }
  if(flake2.body.position.y > 700){
    Matter.Body.setPosition(flake2.body,{x: Math.round(random(0,1150)),y: -60});
  }
  if(flake3.body.position.y > 700){
    Matter.Body.setPosition(flake3.body,{x: Math.round(random(0,1150)),y: -20});
  }
  if(flake4.body.position.y > 700){
    Matter.Body.setPosition(flake4.body,{x: Math.round(random(0,1150)),y: -70});
  }
  
  if(flake5.body.position.y > 700){
    Matter.Body.setPosition(flake5.body,{x: Math.round(random(0,1150)),y: -90});
  }
  
  if(flake6.body.position.y > 700){
    Matter.Body.setPosition(flake6.body,{x: Math.round(random(0,1150)),y: -20});
  }

  if(flake7.body.position.y > 700){
    Matter.Body.setPosition(flake7.body,{x: Math.round(random(0,1150)),y: -40});
  }

  if(flake8.body.position.y > 700){
    Matter.Body.setPosition(flake8.body,{x: Math.round(random(0,1150)),y: -20});
  }
  
  if(flake9.body.position.y > 700){
    Matter.Body.setPosition(flake9.body,{x: Math.round(random(0,1150)),y: -50});
  }
  
  if(flake10.body.position.y > 700){
    Matter.Body.setPosition(flake10.body,{x: Math.round(random(0,1150)),y: -100});
  }

  if(ball1.body.position.y > 700){
    Matter.Body.setPosition(ball1.body,{x: Math.round(random(0,1150)),y: -50});
  }
  if(ball2.body.position.y > 700){
    Matter.Body.setPosition(ball2.body,{x: Math.round(random(0,1150)),y: -60});
  }
  if(ball3.body.position.y > 700){
    Matter.Body.setPosition(ball3.body,{x: Math.round(random(0,1150)),y: -20});
  }
  if(ball4.body.position.y > 700){
    Matter.Body.setPosition(ball4.body,{x: Math.round(random(0,1150)),y: -70});
  }
  
  if(ball5.body.position.y > 700){
    Matter.Body.setPosition(ball5.body,{x: Math.round(random(0,1150)),y: -90});
  }
  
  if(ball6.body.position.y > 700){
    Matter.Body.setPosition(ball6.body,{x: Math.round(random(0,1150)),y: -20});
  }

  if(ball7.body.position.y > 700){
    Matter.Body.setPosition(ball7.body,{x: Math.round(random(0,1150)),y: -40});
  }

  if(ball8.body.position.y > 700){
    Matter.Body.setPosition(ball8.body,{x: Math.round(random(0,1150)),y: -20});
  }
  
  if(ball9.body.position.y > 700){
    Matter.Body.setPosition(ball9.body,{x: Math.round(random(0,1150)),y: -50});
  }
  
  if(ball10.body.position.y > 700){
    Matter.Body.setPosition(ball10.body,{x: Math.round(random(0,1150)),y: -100});
  }

  boy.collide(ground)
  round.y = boy.y + 25
  boy.changeAnimation("standing",boyImg1);
  boy.scale = 0.3
  boy.setCollider("aabb",0,0,150,400)

  if(keyDown("right") || keyDown("d")){
    boy.x = boy.x + 7
    boy.changeAnimation("running flipped",boyImg1)
    boy.scale = 0.7
    boy.setCollider("aabb",0,-10,150,210)
  }
  else if(keyDown("left") || keyDown("a")){
    boy.x = boy.x - 7
    boy.changeAnimation("running",boyImg2)
    boy.scale = 0.7
    boy.setCollider("aabb",0,-10,150,210)
  }
  else if(keyDown ("space")||keyDown("w")||keyDown("up")){
    if(boy.y >= 490)
      boy.velocityY = -20
      boy.changeAnimation("jumping",boyImg6);
      boy.scale = 1
      boy.scale = 0.7
      boy.setCollider("aabb",0,-10,150,210)
      ground.y = width/2
  }
  
  if(keyWentUp("space") || keyWentUp("up") || keyWentUp("w")){
    ground.y = height-100
  }
  
    boy.velocityY = boy.velocityY + 1
}