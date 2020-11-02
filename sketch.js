var Ghost, GhostIMG;
var tower, towerIMG;
var climber, climberIMG, door, doorIMG, Invisibleblock;
var GameState = "Start";
var SpookySound;
var climbersGroup, invisibleGroup, doorsGroup

function preload(){
  GhostIMG = loadImage("ghost-standing.png")
  towerIMG = loadImage("tower.png")
  climberIMG = loadImage("climber.png")
  doorIMG = loadImage("door.png")
  SpookySound = loadSound("spooky.wav")
}

function setup(){
 createCanvas(600,600)
  
  tower = createSprite(260,300);
  tower.addImage(towerIMG)
  tower.scale = 0.8
  tower.velocityY = 2
  
  
  Ghost = createSprite(300,200,30,60);
  Ghost.addImage(GhostIMG)
  Ghost.scale = 0.35
  
  climbersGroup = new Group();
  doorsGroup = new Group();
  invisibleGroup = new Group();
}

function draw(){
  background(0);
  if(GameState==="Start"){
  if(keyDown("space")){
    Ghost.velocityY = -5
  }
  Ghost.velocityY = Ghost.velocityY + 0.8
  
  if(keyDown("right")){
    Ghost.x = Ghost.x + 4
  }
   if(keyDown("left")){
    Ghost.x = Ghost.x - 4
   }  
  if(tower.y>400){
    tower.y = 300
  }   
  SpawnDoors()
  }
 if(invisibleGroup.isTouching(Ghost) || Ghost.y > 600){
   Ghost.destroy();
   GameState = "Over";
 } 
  
  if(GameState==="Over"){
    
    textSize(30)
   fill("yellow")
    text("Game Over",150,250);
  }
  
  drawSprites()
}

function SpawnDoors(){
  if(frameCount%200===0){
  door = createSprite(300,-10)
  climber = createSprite(300,40)
  invisibleblock = createSprite(300,45,climber.width,3)
  invisibleblock.visible = false; 
  door.x = Math.round(random(150,350))
  climber.x = door.x;
  invisibleblock.x = door.x;  
  door.addImage(doorIMG)  
  climber.addImage(climberIMG)
    
  door.velocityY = 2
  climber.velocityY = 2
  invisibleblock.velocityY = 2
    
   Ghost.depth = door.depth
   Ghost.depth = Ghost.depth + 1
    
   door.lifetime = 700
    
   climber.lifetime = 700
    
   invisible.lifetime = 700
    
    
   doorsGroup.add(door)
   climbersGroup.add(climber) 
   invisibleGroup.add(invisibleblock)
  
}
}