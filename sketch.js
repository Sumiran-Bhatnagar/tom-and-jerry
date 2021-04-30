var bgImg;
var mouse;
var cat;
function preload() {

catimg1 = loadAnimation("images/cat1.png");
mouseimg1 = loadAnimation("images/mouse1.png");
catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
mouseimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    //load the images here

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(700,450,10,10);
cat.scale = 0.07;
mouse = createSprite(250,435,10,10);
mouse.scale = 0.07;
}

function draw() {

    background(0);
  //Write condition here to evalute if tom and jerry collide
if (cat.x - mouse.x  < (cat.width - mouse.width)/2){
 if(cat.isTouching(mouse)){
  cat.velocityX = 0;
 }
}

cat.addAnimation("catRunning",catimg2);
cat.changeAnimation("catRunning");
        drawSprites();
        
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === RIGHT_ARROW);{
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

  }

if (keyCode === LEFT_ARROW);{
  cat.velocityX =-2;
cat.addAnimation("catRunning",catimg2);
cat.changeAnimation("catRunning");
}


}
