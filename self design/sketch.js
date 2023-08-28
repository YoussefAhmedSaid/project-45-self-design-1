var flappyBird
var bG


function preload(){
  flappyBirdImg = loadImage("flappybirdcharacter-removebg-preview.png")
  bG = loadImage("flappybirdbackground.jpg")
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  flappyBird = createSprite(40, 200, 50, 50);
  flappyBird.addImage ("bird", flappyBirdImg)
  flappyBird.scale = 0.3
  invisibleGround = createSprite(200,height-50,400,10);
  invisibleGround.visible = true;
  
}

function draw() {
  background(bG);  
  if(keyDown("space")&& flappyBird.y >= 100) {
    flappyBird.velocityY = -12;
}

//add gravity
flappyBird.velocityY = flappyBird.velocityY + 0.8  
flappyBird.collide(invisibleGround);
  drawSprites();
}