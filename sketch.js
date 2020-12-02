var box1 , box2;

function setup() {
  createCanvas(800,400);
   box1 = createSprite(400, 200, 50, 100);
   box1.shapeColor = "green";
   box2 = createSprite(600,400,100,20);
   box2.shapeColor = "blue";
   box1.debug = true;
   box2.debug = true;

}

function draw() {
  background(255,255,255);  
  box2.y = World.mouseY;
  box2.x = World.mouseX;
  if (box1.y - box2.y <= box1.height / 2 + box2.height/2 && box2.y - box1.y <= box1.height / 2 + box2.height/2 && box1.x - box2.x <= box1.width / 2 + box2.width/2  && box2.x - box1.x <= box1.width / 2 + box2.width/2){
    box1.shapeColor = "red";
  } else {
    box1.shapeColor = "green";
  }
  // if (box1.y - box2.y <= box1.height / 2 + box2.height/2 && box2.y - box1.y <= box1.height / 2 + box2.height/2 && box1.x - box2.x <= box1.width / 2 + box2.width/2  && box2.x - box1.x <= box1.width / 2 + box2.width/2){
  //   box2.y =200;
  //   box2.x = 200;
  // }else{
  //   box2.y = World.mouseY;
  //   box2.x = World.mouseX;
  // } 
  drawSprites();
}