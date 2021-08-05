var cat,catImg1,catImg2,catImg3;
var mouse,mouImg1,mouImg2,mouImg3;
var canvas;
var bgImg;

function preload() {
    bgImg=loadImage("images/garden.png");

    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");
    
    mouImg1=loadAnimation("images/mouse1.png");
    mouImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouImg3=loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    cat =createSprite(800,600);
    cat.addAnimation("cat",catImg1);
    cat.scale=0.2;
    cat.setCollider("rectangle",0,0,20,20);
    
    
    mouse=createSprite(200,600);
    mouse.addAnimation("mouse",mouImg1);
    mouse.scale=0.16;

}

function draw() {

    background(bgImg);
    
    if(mouse.isTouching(cat)){

        cat.addAnimation("cat3",catImg3);
        cat.changeAnimation("cat3");
        cat.velocityX=0
        
        mouse.addAnimation("mouse3",mouImg3);
        mouse.changeAnimation("mouse3");
        mouse.velocityX=0;
    }
   

    drawSprites();

   
}
function keyPressed(){
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("cat1",catImg2);
    cat.changeAnimation("cat1");
    mouse.addAnimation("mou1",mouImg2);
    mouse.changeAnimation("mou1");
    mouse.frameDelay=25; 
}
if(keyCode===RIGHT_ARROW){
    mouse.velocityX=5;
    mouse.addAnimation("mou1",mouImg2);
    mouse.changeAnimation("mou1");
    mouse.frameDelay=25; 
}


}
