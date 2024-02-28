let ALIENSHAWTY;
let FRANKBABY;
let FLYME;
let shake = {
//imgds/FRANKBABY
 // bounds, 
  x: 20, 
  y: 300, 
  w: 112,
  h: 88,
display: function(){
  image(FRANKBABY,this.x,this.y)
}
}

function preload() {
  ALIENSHAWTY = loadImage('imgds/ALIENSHAWTY.png');
  FRANKBABY = loadImage('imgds/FRANKBABY.png');
  FLYME = loadSound("audio/FRANKFLYING.m4a");
  }

function setup() {
  createCanvas(400, 400);
  background("#352449");
 image(ALIENSHAWTY, 300, 20);
 fill(255);
  textSize(20);
  text("Get Frank to the moon", 5, 50);
}

function draw() {
  circle(62,8,4);
  circle(10,252,4);
  circle(72,67,4);
  circle(150,122,2);
  circle(374,199,3);
  circle(254,395,3);
  circle(395,270,2);
  circle(17,71,2);
  circle(52,26,1);
  circle(77,300,6);
  circle(93,7,5);
  circle(192,92,2);
  circle(33,24,2);
  circle(21,198,3);
  circle(4,312,1);
  circle(93,12,6);
  circle(111,82,2);
  circle(333,168,3);
  circle(80,286,5);

  
  shake.display();
  if (
    shake.x + shake.w >= 300 && 
    shake.x <= 300 + ALIENSHAWTY.width && 
    shake.y + shake.h >= 20 && 
    shake.y <= 20 + ALIENSHAWTY.height 
  ) 
  {
     congratulationsColor = color(random(255), random(255), random(255));
    // Congratulations 
    fill(congratulationsColor);
    textSize(50);
    text("Congratulations!", 20, height - 200);
    if (!FLYME.isPlaying()) {
      FLYME.play();
    }
  }


  // check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX >= shake.x &&
    mouseX <= shake.x + shake.w &&
    mouseY >= shake.y &&
    mouseY <= shake.y + shake.h
  ) {
    shake.x += random(-2, 5);
    shake.y += random(-5, 2);
  }

  function mouseMoved() {
    // Pause the audio when the mouse is moved
    if (FLYME.isPlaying()) 
      FLYME.pause();
    }
  
}

