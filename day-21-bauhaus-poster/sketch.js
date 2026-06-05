function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('#f5f1e8');
  noStroke();
  fill('#d62828');
  rect(width * 0.1, height * 0.2, width * 0.35, height * 0.6);
  fill('#fcbf49');
  circle(width * 0.65, height * 0.35, height * 0.3);
  fill('#003049');
  rect(width * 0.55, height * 0.55, width * 0.3, height * 0.25);
  stroke('#000');
  strokeWeight(12);
  line(width * 0.55, height * 0.55, width * 0.85, height * 0.55);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
