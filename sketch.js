var bg;
var tomImg1,tomImg2,tomImg3;
var jerryImg1,jerryImg2,jerryImg3;
var tom,jerry;

function preload() {
    //load the images here

    bg=loadImage("images/garden.png");
    tomImg1=loadImage("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3=loadImage("images/cat4.png");

    jerryImg1=loadImage("images/mouse1.png");
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(800,600);
    //create tom and jerry sprites here
     tom=createSprite(670,400,40,40)
     tom.addAnimation("tomsleeping",tomImg1)
     tom.scale=0.2
     tom.velocityX=-2

     jerry=createSprite(100,450,40,40)
     jerry.addAnimation("jerryStanding",jerryImg1);
     jerry.scale= 0.1
    
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < tom.width/2 + jerry.width/2
        && jerry.x - tom.x < tom.width/2 + jerry.width/2
        && tom.y - jerry.y < tom.height/2 + jerry.height/2
        && jerry.y - tom.y < tom.height/2 + jerry.height/2){
            tom.addAnimation("catHappy",tomImg3)
            tom.changeAnimation("catHappy")
            jerry.addAnimation("mousehappy",jerryImg3)
            jerry.changeAnimation("mouseHappy")
        }
        else {
            tom.addAnimation("tomsleeping", tomImg1)
            tom.changeAnimation("tomsleeping")
            jerry.addAnimation("jerryStanding", jerryImg1)
            jerry.changeAnimation("jerryStanding")
            
        }
   
   
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    jerry.addAnimation("mouseTeasing", jerryImg2)
    jerry.frameDelay = 25;
    jerry.changeAnimation("mouseTeasing")
    
}

}
