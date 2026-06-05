const COLOR = '#ff6fb7';

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('#050505');
  noStroke();
  fill(COLOR);
  const size = min(width, height) * 0.6;
  circle(width * 0.5, height * 0.5, size);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
