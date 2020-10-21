var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  wall = createSprite(1500,200,thickness,60);
  wall.shapeColor = color(80,80,80);
  bullet = createSprite(50,200,20,5);
  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0); 
  if(isTouching(bullet,wall)) {
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
    if(damage<10) {
      bullet.shapeColor = color(0,255,0);
    } else {
      bullet.shapeColor = color(255,0,0);
    }
    bullet.velocityX = 0;
  }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  }
}