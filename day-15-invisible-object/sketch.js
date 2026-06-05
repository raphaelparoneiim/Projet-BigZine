function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('#f5f1e3');
  noStroke();
  fill(0, 40);
  ellipse(width * 0.5, height * 0.6, 360, 90);
  fill(0, 80);
  ellipse(width * 0.45, height * 0.55, 220, 50);
  fill(255, 40);
  ellipse(width * 0.55, height * 0.62, 280, 60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
