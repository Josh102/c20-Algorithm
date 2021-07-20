var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,50);
  movingRect=createSprite(100,100,50,80);
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  //200-x===50

  console.log(movingRect.x)

  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="cyan";
    fixedRect.shapeColor="cyan";
  }else{
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  drawSprites();
}