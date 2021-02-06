var PLAY = 1;
var END = 0;
var gameState = 1;

var monkey,monkey_running;

var ground;

var banana,bananaImg;

var obstacle,obstacleImg;

var food,foodGroup,foodImg;

var obstacle,obstacleGroup,obstacleImg;

var score=0;

var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImg = loadImage("banana.png");
  
  obstaceImg = loadImage("obstacle.png");
  
  foodImg=loadImage("banana.png");
  
  obstacleImg=loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(500,400);
  
  foodGroup=new Group();
  obstacleGroup=new Group();
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(300,350,800,10);
  ground.velocityX=0;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  score=0;
  survivalTime=0;
}


function draw() {
  background("lightGreen")
  
  stroke("white");
  textSize(21);
  fill("white");
  text("score:"+ score,500,70);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("SurvivalTime:"+ survivalTime,20,50);
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space")) {
      monkey.velocityY = -12;
    }
  monkey.velocityY=monkey.velocityY+0.8;
    
  monkey.collide(ground);
  
  food();
  obstacle();
  
  drawSprites();
}

function food() {
  
    if(frameCount % 80 === 0) {
      var food = createSprite(600,165,10,40);
      food.y=Math.round(random(120,200));
      food.addImage("banana",foodImg)
      food.velocityX=-7;
      food.scale = 0.1;
      food.lifetime = 300;

      foodGroup.add(food);
    }
  
}

function obstacle() {
  
    if(frameCount % 300 === 0) {
      var obstacle = createSprite(300,165,10,40);
      obstacle.y=Math.round(random(310,310));
      obstacle.addImage("obstacle",obstacleImg);
      obstacle.velocityX=-7;
      obstacle.scale = 0.2;
      obstacle.lifetime = 300;

      obstacleGroup.add(obstacle);
    }
  
}
