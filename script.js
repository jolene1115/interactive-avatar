/* VARIABLES */

let eyeWidth = 15;
let eyeHeight = 15;
let earWidth = 75;

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 

  //sets the background color
  background(200,200,255); 
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  //Ears 
  fill('#a3e7fa')
  ellipse(300,135,earWidth,earWidth)
  ellipse(100,135, earWidth,earWidth)

  fill(255,255,255)
  ellipse(289,140,earWidth/2,earWidth/2)
  ellipse(109,140, earWidth/2,earWidth/2)
  
  //Face
  fill(163,231,250)
  ellipse(width/2,height/2,200,175);

  
  
  //Eyes
  if (mouseIsPressed) {
    //Eyes open
      fill(0)
      ellipse(160,195,eyeWidth,eyeHeight);
      ellipse(240,195,eyeWidth,eyeHeight);
  } else {

    //Eyes closed
    fill(0);
    ellipse(160,195,18,eyeHeight/10);
    ellipse(240,195,18,eyeHeight/10);
  }

  //Nose
  fill(123,83,232)
  ellipse(200,205,35,40)

  //Mouth
  noFill()
  strokeWeight(5)
  arc(200,212,50,50,50,125);

  //Text
  fill(0)
  textSize(30);
  text('Koya',20,35);
  textSize(15);
  text('BT21',20,60)
  
  //Directions for mouse press
  fill(0)
  textSize(15);
  text('Click to open \nmy eyes!!',300,350)
  
}