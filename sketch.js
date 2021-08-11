var shipMoving;
var ship;
var water;
var seaImage,edges;

function preload(){
shipMoving = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png" );
seaImage = loadImage ("sea.png");
}

function setup(){
  createCanvas(800,400);
  water = createSprite(200, 180, 400, 20);
  water.addImage(seaImage);
  ship = createSprite (275, 275, 20, 50);
  ship.addAnimation("moving", shipMoving);
  edges=createEdgeSprites();
  ship.scale = 0.3;
  ship.x = 125;

}

function draw() {
  background("blue");
 ship.collide(edges[3]);
 water.velocityX = -3;
 if (water.x < 0 ) {
water.x=water.width/2
 }
 drawSprites();
}