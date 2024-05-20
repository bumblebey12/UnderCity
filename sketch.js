//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(mouseX,202,205,150); //an RGB color for the canvas' background
  //circle
  stroke(255,250,137) // an RGB color for the circle's border
  fill(255,0,237,140); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(width/2,height/2,20,20); // center of canvas, 20px dia
  strokeWeight(5);
  rect(mouseX,237,140,26,100)
  textSize(64);
  textFont("Papyrus");
  text('HEHEHEHE',49,93);
  textStyle(ITALIC);

  stroke(237,100.30)
  fill(mouseY,135,150,250,255);
  ellipse(mouseX,width/1,height/2,15,13);

triangle(mouseY,237,300,100,237,100,300);
 rect(mouseY,190,140,150,140);

arc(60, 100, 120, 100, 70, PI,OPEN);
}
