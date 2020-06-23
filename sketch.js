var car;
var life = 0;

var carGroup;
var score = 200;

function preload(){
 /*trackImage = loadImage("track.png");
  carImage = loadImage("car1.png");
  obstacle1Img = loadImage("car2.png");
  obstacle2Img = loadImage("car3.png");
  obstacle3Img = loadImage("car4.png");*/

}

function setup() {
  createCanvas(1350, 650);
 car = createSprite(650,600,20,40);
 // car.addImage(carImage);
  //wall1 = createSprite(100,325,200,650);
  //wall1.visible = false;
  //wall2 = createSprite(1250,325,200,650);
  //wall2.visible = false;
  bulletGroup = new Group();
  carGroup = new Group();
}

function draw() {
  background(0);
  createEdgeSprites();
  //car.bounceOff(wall1);
  //car.bounceOff(wall2);
  //textFont("Georgia");
  
  if(keyDown("LEFT_ARROW")) {
    car.velocityX = -20;
  }
  if(keyDown("RIGHT_ARROW")) {
    car.velocityX = 20;
  }
  if(carGroup.isTouching(car)){
   score = score - 10
   carGroup.destroy();
  }
  if(bulletGroup.isTouching(carGroup)){
    score=score + 50;
  }
  if(keyDown("SPACE")){
     bullets();
  }
  if(car.x<0){
   car.x = 1350;
  }
  if(car.x>1350){
    car.x = 0;
   }
  drawSprites();
  spawnCars();
  //score = score + Math.round(getFrameRate()/60);
text("Score: "+ score, 500,50);
textSize(50);

}

function spawnCars() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var cars = createSprite(600,0,40,10);
    cars.scale = 1;
    cars.x = Math.round(random(200,1000));
    var rand = Math.round(random(1,3));
  // cars.addImage(obstacle3Img);
   // switch(rand) {
     // case 1: cars.addImage(obstacle1Img);
       //       break;
      //case 2: obstacle.addImage(obstacle2Img);
        //      break;
      //case 3: obstacle.addImage(obstacle3Img);
        //      break;
          //    default: break;
              
   // } 
    cars.velocityY = 10;
    //add each cloud to the group
    carGroup.add(cars);
  }
  
}

function bullets(){
  var bullet = createSprite(650,600,2,5);
  bullet.x = car.x;
  bullet.shapeColor = "red";
  bullet.velocityY = -10;
 bulletGroup.add(bullet);
}