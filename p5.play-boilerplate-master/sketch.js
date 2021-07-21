var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect= createSprite(100,100,50,80);
  fixedRect.shapeColor=("red")
  movingRect.shapeColor=("red")
}

function draw() {
  background(255,255,255);
  movingRect.x= mouseX;
  movingRect.y = mouseY;

  //m-400 < 25+25
  //m-400 < 50
  //450-400 < 50
  //449-400 < 50
  //49<50
  
  //m=450
  console.log(movingRect.x-fixedRect.x)
  
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2 +fixedRect.height/2 &&
    fixedRect.y -movingRect.y < movingRect.height/2 +fixedRect.height/2){

    fixedRect.shapeColor="cyan"
    movingRect.shapeColor="cyan"

  }
  else{

    fixedRect.shapeColor="red"
    movingRect.shapeColor="red"
  
  }

  drawSprites();
}