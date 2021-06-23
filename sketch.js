var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bgImg, alien1Img, alien2Img, alien3Img, alien4Img, alien5Img, alien6Img, alien7Img, alien8Img, alien9Img;
var fighterShipImg, fighterBulletImg, alienBulletImg;
var fighter,bg,alienGroup1,alienGroup2,alienGroup3,alienGroup4,alienGroup5,alienGroup6,alienGroup7,alienGroup8,alienGroup9;
var fighterBulletGroup,alienBulletGroup,alienGroup;
var score = 0;

function preload() {
  bgImg = loadImage("Images/bg.jpeg");
  alien1Img = loadImage("Images/alien1.png");
  alien2Img = loadImage("Images/alien2.png");
  alien3Img = loadImage("Images/alien3.png");
  alien4Img = loadImage("Images/alien4.png");
  alien5Img = loadImage("Images/alien5.png");
  alien6Img = loadImage("Images/alien6.png");
  alien7Img = loadImage("Images/alien7.png");
  alien8Img = loadImage("Images/alien8.png");
  alien9Img = loadImage("Images/alien9.png");
  fighterShipImg = loadImage("Images/fighterShip1.png");
  fighterBulletImg = loadImage("Images/playerBullet.png");
  alienBulletImg = loadImage("Images/alienBullet.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  alienGroup = new Group();
  /*alienGroup1 = new Group();
  alienGroup2 = new Group();
  alienGroup3 = new Group();
  alienGroup4 = new Group();
  alienGroup5 = new Group();
  alienGroup6 = new Group();
  alienGroup7 = new Group();
  alienGroup8 = new Group();
  alienGroup9 = new Group();*/
  
  bg = createSprite(width/2,height/2, width, height);
  bg.addImage(bgImg);
  bg.scale = 6;
  bg.y = bg.height/2;
  bg.velocityY = 1;

  fighter = createSprite(width/2,height-100);
  fighter.addImage(fighterShipImg);
  fighter.scale = 0.4;

}

function draw() {
  background(255,255,255);
  
  if(gameState === PLAY) {
    if(bg.y > height-300) {
      bg.y = bg.height/2;
    }

    if(keyDown(RIGHT_ARROW)) {
      fighter.x = fighter.x + 5;
    }

    if(keyDown(LEFT_ARROW)) {
      fighter.x = fighter.x - 5;
    }

    if(keyDown("space")) {
    fighterBulletImg.velocityY = -14;
    }
    
    var rand = random(1,9);

    if(frameCount % 60 === 0) {
    var alien = createSprite(Math.round(random(200,width-200)),0,20,20);
    alien.velocityY = 4;
    alien.lifeTime = height+50;
    alienGroup.add(alien);
    
    var rand = Math.round(random(1,9));
    
    switch(rand) {
      case 1: alien.addImage(alien1Img);
              break;
      case 2: alien.addImage(alien2Img);
              break;
      case 3: alien.addImage(alien3Img);
              break;
      case 4: alien.addImage(alien4Img);
              break;
      case 5: alien.addImage(alien5Img);
              break;
      case 6: alien.addImage(alien6Img);
              break;
      case 7: alien.addImage(alien7Img);
              break;
      case 8: alien.addImage(alien8Img);
              break;
      case 9: alien.addImage(alien9Img);
              break;              
      default: break;
      }
    }
    if(alienGroup.isTouching(fighter)) {  
    gameState = END;  
    }
  } else if (gameState === END) {
      bg.velocityY = 0;
      fighter.velocityX = 0;
      alienGroup.setVelocityYEach(0);
      
      alienGroup.setLifetimeEach(-1);
      
      //if(mousePressedOver(restart)) {
        //reset();
      //}
  }

  /*if(frameCount %60 === 0) {
    SpawnAlien1();
    SpawnAlien2();
    SpawnAlien3();
    SpawnAlien4();
    SpawnAlien5();
    SpawnAlien6();
    SpawnAlien7();
    SpawnAlien8();
    SpawnAlien9();
  }*/
  drawSprites();
}

/*function SpawnAlien1() {
  var alien1 = createSprite(Math.round(random(200,width-200)),0,20,20);
  alien1.addImage(alien1Img);
  alien1.velocityY = 3;
  alien1.scale = 0.6;
  alien1.lifetime = height+50;
  alienGroup1.add(alien1);
}

function SpawnAlien2() {
  var alien2 = createSprite(Math.round(random(200,width-200)),0,30,30);
  alien2.addImage(alien2Img);
  alien2.velocityY = 3;
  alien2.scale = 0.6;
  alien2.lifetime = height+50;
  alienGroup2.add(alien2);
}

function SpawnAlien3() {
  var alien3 = createSprite(Math.round(random(200,width-200)),0,40,40);
  alien3.addImage(alien3Img);
  alien3.velocityY = 3;
  alien3.scale = 0.6;
  alien3.lifetime = height+50;
  alienGroup3.add(alien3);
}

function SpawnAlien4() {
  var alien4 = createSprite(Math.round(random(200,width-200)),0,50,50);
  alien4.addImage(alien4Img);
  alien4.velocityY = 3;
  alien4.scale = 0.6;
  alien4.lifetime = height+50;
  alienGroup4.add(alien4);
}

function SpawnAlien5() {
  var alien5 = createSprite(Math.round(random(200,width-200)),0,60,60);
  alien5.addImage(alien5Img);
  alien5.velocityY = 3;
  alien5.scale = 0.6;
  alien5.lifetime = height+50;
  alienGroup5.add(alien5);
}

function SpawnAlien6() {
  var alien6 = createSprite(Math.round(random(200,width-200)),0,70,70);
  alien6.addImage(alien6Img);
  alien6.velocityY = 3;
  alien6.scale = 0.6;
  alien6.lifetime = height+50;
  alienGroup6.add(alien6);
}

function SpawnAlien7() {
  var alien7 = createSprite(Math.round(random(200,width-200)),0,80,80);
  alien7.addImage(alien7Img);
  alien7.velocityY = 3;
  alien7.scale = 0.6;
  alien7.lifetime = height+50;
  alienGroup7.add(alien7);
}

function SpawnAlien8() {
  var alien8 = createSprite(Math.round(random(200,width-200)),0,90,90);
  alien8.addImage(alien8Img);
  alien8.velocityY = 3;
  alien8.scale = 0.6;
  alien8.lifetime = height+50;
  alienGroup8.add(alien8);
}

function SpawnAlien9() {
  var alien9 = createSprite(Math.round(random(200,width-200)),0,100,100);
  alien9.addImage(alien9Img);
  alien9.velocityY = 3;
  alien9.scale = 0.6;
  alien9.lifetime = height+50;
  alienGroup9.add(alien9);
}*/