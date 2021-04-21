var balloon;

var balloonImage1;

var balloonImage2;

var database;

var Position;

var balloonpos;

// create database and position variable here

function preload(){

   bg = loadImage("cityImage.png");

   balloonImage1 = loadAnimation("hotairballoon1.png");

   balloonImage2 = loadAnimation("hotairballoon1.png", "hotairballoon1.png", "hotairballoon1.png", "hotairballoon2.png", "hotairballoon2.png", "hotairballoon2.png", "hotairballoon3.png", "hotairballoon3.png", "hotairballoon3.png");

  }

//Function to set initial environment

function setup(){

  database = firebase.database();

  createCanvas(1500, 700);

  balloon = createSprite(250, 450, 150, 150);

  balloon.addAnimation("hotAirBalloon", balloonImage1);

  balloon.scale = 0.5;

  textSize(20); 

  var balloonposition = database.ref("balloon/height");
  
  balloonposition.on("value", readPosition);

}

function draw(){

  background(bg);

  balloon.velocityX = 0;

  balloon.velocityY = 0;

  drawSprites();

  fill("pink");

  textFont("Bodoni MT Condensed");

  strokeWeight(2);

  stroke("purple");

  textSize(45);

  text("**Use arrow keys to move HOT AIR BALLOON!!", 40, 40);

}

function changePosition(x, y){

  database.ref("balloon/height").set({

    x : height.x + x,
    y : height.y + y

  })

}


function readPosition(data){

  height = data.val();

  balloonpos.x = height.x;
  balloonpos.y = height.y;

}

function keyPressed(){


  if(keyCode === LEFT_ARROW){

    balloon.velocityX = -12;

    balloon.addAnimation("hotAirBalloon", balloonImage2);

  }

  if(keyCode === RIGHT_ARROW){

    balloon.velocityX = 12;

    balloon.addAnimation("hotAirBalloon", balloonImage2);

  }

    if(keyCode === UP_ARROW){

      balloon.velocityY = -20;
  
      balloon.addAnimation("hotAirBalloon", balloonImage2);

      balloon.scale = balloon.scale - 0.1;
  
    }
    
    if(keyCode === DOWN_ARROW){

      balloon.velocityY = 20;
  
      balloon.addAnimation("hotAirBalloon", balloonImage2);

      balloon.scale = balloon.scale + 0.1;
  
    }

}
