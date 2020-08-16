

var wall,thickness,barte;
var bullet,speed,weight;






function setup() {
  createCanvas(1600,400);
  
  barte=createSprite(800,200,1600,400);
  bullet=createSprite(50, 200, 50, 20);
  bullet.shapeColor=(255,255,255);
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=(80,80,80)
  speed=random(223,321);
  weight=random(30,52); 
  thickness=random(22,83);



}







function draw() {
  background(255,255,255);
  
  bullet.velocityX=speed;

  if(damage(bullet,wall)){
  
    bullet.x=1119.9;

    var sm=(0.5*weight*speed*speed)/(thickness*thickness*thickness); 
    
    if(sm>10){
  
     bullet.shapeColor="green"
      
    }
  
  
     else if(sm<10)
     {
       bullet.shapeColor="red"
     }
  


   

   
  }








  drawSprites();
}


function damage(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

if(bulletRightEdge>=wallLeftEdge)

{

return true

{

  return false
}

}



  

}



