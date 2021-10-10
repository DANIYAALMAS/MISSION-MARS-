var gameState="start"
var astronaut,gem;
var welcomePage, welcomePageImg;
var playButton, playButtonImg;
var controlButton, controlButtonImg, controlInformation, controlInformationImg;
var closeButton, closeButtonImg,level1Img;
var storyButton, storyButtonImg, story, storyImg,obstacle1Img, obstacle2Img;


//-----------------------------------------------------------------------------------------------------------------------------------------
var edges
var level1
function preload()
{

  welcome_img = loadAnimation('assets/welcome.jpg');
  gemImg = loadImage('assets/gem.png');
  astronautImg = loadImage('assets/play.png');
  level1Img = loadImage("assets/level1.jpg");
  obstacle1Img = loadImage("assets/obstacleslanting.png");
  gemsImg=loadImage("assets/gem.png");
  obstacle2Img=loadImage("assets/obstacle3.png");
  //--------------------------------------------------------------------------------------------------------------
  playButtonImg= loadAnimation("assets/playButton.png");
  controlButtonImg= loadAnimation("assets/controlButton.png");
  storyButtonImg= loadAnimation("assets/storybutton.png");
  resetButtonImg =loadImage("assets/reset.png");
  success=loadImage("assets/success.png");
  
  
  


 
  
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  edges = createEdgeSprites();

  
  start();
  controlPageSprite();
  storyPageSprite();
 // levelOneSprite();

  
  
  
}

function draw(){
  background(0);
  drawSprites();

  if(gameState === "start"){
    stroke(255);
    strokeWeight(2);
    fill(255, 10, 84);
    textSize(100);
    textFont("monotype corsiva");
    text("MISSION MARS",windowWidth-1100,windowHeight-620);
    startlevel();
}
/*if(gameState === "level-1"){
  levelOne();   
}*/
if(gameState === "control"){
  controlPage();
}

if(gameState === "story"){
  storyPage();
}

if(gameState === "end"){
End();
}

}
function start(){
  welcomePage=createSprite(width/2,height/2+100,windowWidth,windowHeight)
 welcomePage.addAnimation("welcomepage",welcome_img);
  welcomePage.scale=0.5
  welcomePage.visible=false;

 playButton = createSprite(windowWidth-770,windowHeight-320);
 playButton.addAnimation("startbutton",playButtonImg);
  playButton.scale = 1;
  playButton.visible = false;

  controlButton = createSprite(windowWidth-770,windowHeight-240);
  controlButton.addAnimation("controlsArea",controlButtonImg);
  controlButton.scale = 1;
  controlButton.visible = false;

 storyButton = createSprite(windowWidth-770,windowHeight-160);
storyButton.addAnimation("storyInformation",storyButtonImg);
  storyButton.scale = 1;
  storyButton.visible = false
}
function controlPageSprite(){

  controlInformation = createSprite(width/2,height/2,windowWidth,windowHeight);
 //controlInformation.addAnimation(controlInformationImg);
  controlInformation.visible = false;

  closeButton = createSprite(windowWidth-100,windowHeight-650,50,50);
/// closeButton.addImage("option",closeButtonImg);
  closeButton.scale = 0.3;
  closeButton.visible = false;
}
function storyPageSprite(){

  story = createSprite(width/2-350,height/2-130);
 //story.addImage(storyImg);
  story.visible = false;
}

  function startlevel(){
    welcomePage.visible=true;
    playButton.visible=true;
    controlButton.visible=true;
    storyButton.visible=true;

    if(mousePressedOver(playButton)){
      gameState = "level-1";
  
    }
    if(mousePressedOver(controlButton)){
         gameState = "control";
    }
    if(mousePressedOver(storyButton)){
         gameState = "story";
    }
    
  }

  function controlPage(){
    welcomePage.visible = false;
    playButton.visible = false;
    controlButton.visible = false;
    storyButton.visible = false;
    
    closeButton.visible = true;
    controlInformation.visible = true;
    
    if(mousePressedOver(closeButton)){
       gameState = "start";
       controlInformation.visible = false;
       closeButton.visible = false;
    }
  }
  
  function storyPage(){
    welcomePage.visible = false;
    playButton.visible = false;
    controlButton.visible = false;
    storyButton.visible = false;
  
  
    closeButton.visible = true;
    story.visible = true;
  
    if(mousePressedOver(closeButton)){
      gameState = "start";
      closeButton.visible = false;
      story.visible = false;
   }
   
   textSize(45)
   fill(255,0,0);
   text(" chris is an astronaut .",windowWidth-600,windowHeight-400);
   fill(255, 127, 0);
   text(" nasa send him on mars  ",windowWidth-600,windowHeight-350);
   fill(255, 255, 0);
   text(" now he has landed on mars.",windowWidth-600,windowHeight-300);
   fill( 0, 255, 0);
   text(" When he came to know that there are aliens living on mars",windowWidth-1050,windowHeight-160);
   fill( 0, 0, 255);
   text(" he is afraid of aliens ,but he want to complete his mission",windowWidth-1050,windowHeight-110);
   fill( 75, 0, 130);
   text(" So,help him to complete his mission",windowWidth-1050,windowHeight-60);
   fill(148, 0, 211);
   text(" from hiding aliens",windowWidth-700,windowHeight-60);
 }


