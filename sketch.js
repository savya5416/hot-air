var ballon, background;

function preload(){

  backgroundImg = loadImage("Hot Air Ballon-01.png")
  ballonImage = loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png");

}

function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  ballon=createSprite(100, 400, 20, 20);
  ballon.addAnimation("ballon",ballonImage);
  

}

function draw() {
  background(backgroundImg); 
  
  if(keyDown(UP_ARROW)){
    ballon.y=ballon.y - 10;
    ballon.scale= 0.2;
  }

  if(keyDown(DOWN_ARROW)){
    ballon.y=ballon.y + 10;
    ballon.scale=0.4;
  }

  if(keyDown(LEFT_ARROW)){
    ballon.x=ballon.x - 10;
  }
  
  if(keyDown(RIGHT_ARROW)){
    ballon.x=ballon.x + 10;
  }

  drawSprites();
}