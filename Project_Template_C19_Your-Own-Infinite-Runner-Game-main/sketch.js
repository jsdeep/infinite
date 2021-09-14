var running;
var jumping;
var player;
var bg,j;
var obstacle,obstacle1,obstacle2,obstaclei,obstacle1i,obstacle2i;
var cashG;
var score=0;


function preload(){
running=loadAnimation("/Running/1.png","/Running/2.png","/Running/3.png","/Running/4.png","/Running/5.png","/Running/6.png","/Running/7.png");
jumping=loadAnimation("/Jumping/1 (1).png","/Jumping/1 (4).png","/Jumping/1 (8).png","/Jumping/1 (12).png","/Jumping/1 (16).png","/Jumping/1 (20).png","/Jumping/1 (24).png","/Jumping/1 (28).png","/Jumping/1 (32).png","/Jumping/1 (36).png","/Jumping/1 (40).png");
bg = loadImage("Untitled.png");
obstaclei=loadImage("hurdle.jpg");
obstacle1i=loadImage("chair.jpg");
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    j=createSprite(width/2,510);
    j.addImage(bg);
    cashG=new Group()
   
   jumping.looping=false;
 
    player = createSprite(width/3.8,height-508,20,20);
    player.addAnimation("SahilRunning",running);
    
    
    player.scale=0.80;
}

function draw() {

    background ("white");
    textSize(20);
    text("score:"+ score,40,60);
    player.collide(j);
    score=score+Math.round(frameCount/60);
    createChair();
    player.velocityY = player.velocityY +0.03; 
    drawSprites();
    j.velocityX=-4;
    if(j.x===-200){
        j.x=0;       
    }
    if (keyWentDown(UP_ARROW)){
        js();
    }
    }
    
function createChair() {
    if (frameCount % 250 === 0) {
     obstacle = createSprite(width/1.5,height-550,40,10);
     obstacle.addImage(obstacle1i);
     obstacle.scale=0.6;
     obstacle.velocityX = -3;
     obstacle.lifetime = 2000;
    cashG.add(obstacle);
    obstacle.x=Math.round(random(width/0.6,width/0.9))
    obstacle.debug=true;
    }
  }
  function js(){
    if (keyWentDown(UP_ARROW && player.isTouching())){     
       player.velocityY=-2;
             }
}