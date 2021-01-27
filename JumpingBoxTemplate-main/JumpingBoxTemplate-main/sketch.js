var canvas;
var music;
var surface1,surface2,surface3,surface3,surface4;
var box;
var boundary1,boundary2,boundary3,boundary4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
//create 4 different surfaces
surface1=createSprite(100,560,100,20);
surface1.shapeColor="blue";
surface2=createSprite(300,560,100,20);
surface2.shapeColor="yellow";
surface3=createSprite(500,560,100,20);
surface3.shapeColor="red";
surface4=createSprite(700,560,100,20);
surface4.shapeColor="green";

boundary1=createSprite(400,3,800,10);
boundary1.shapeColor="red"

boundary2=createSprite(400,600,800,20);
boundary2.shapeColor="red";

boundary3=createSprite(3,200,10,800);
boundary3 .shapeColor="red";

boundary4=createSprite(800,200,20,800);
boundary4.shapeColor="red";
//create box sprite and give velocity
box=createSprite(600,530,30,30);


}
function draw() {
    background(rgb(150,109,50));
    
   // createEdgeSprites();
if(box.isTouching(boundary1)||box.isTouching(boundary2)||box.isTouching(boundary3)||box.isTouching(boundary4)) {  
    box.bounceOff;
    }
    //add condition to check if box touching surface and make it box
  
  
  
    if(keyCode==DOWN_ARROW){ 
        box.velocityY=4
    }
    if(keyCode==LEFT_ARROW){
    box.velocityX=-4;
    }
    if(keyCode==RIGHT_ARROW) { 
    box.velocityX=4;
    }
    if(keyCode==UP_ARROW){ 
    box.velocityY=-4
    }

    drawSprites();
}
