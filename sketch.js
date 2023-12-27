function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  background(240);
  fill(250);
  stroke(235);
}

function draw() {
  ellipse(mouseX,mouseY,50);
}
