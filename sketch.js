

var ball;
function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,20,20);
  ball.shapeColor = "red"
}

function draw() 
{
  background(30);
  drawSprites();

  if (keyDown("left")){
    ball.x = ball.x - 3
  }
  if (keyDown("right")){
    ball.x = ball.x + 3
  }
  


}




