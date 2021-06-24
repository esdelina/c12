var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);


garden=createSprite(200,200);
garden.addImage(gardenImg);


apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg)
apple.scale = 0.1
apple.velocityY = 3;
apple.lifetime = 150;


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
 function createApples(){
   apple = createSprite(random(50,350),40,10,10)
   
 }

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);


  var select_sprites = Math.round(random(1,3));

       if ( frameCount % 80 == 0) {
         if (select_sprites ==1) {
             createApples();
         }
       }







  drawSprites();
}