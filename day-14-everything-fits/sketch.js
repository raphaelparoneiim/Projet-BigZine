function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('#050505');
  const cols = 10;
  const size = min(width, height) * 0.7;
  const cell = size / cols;
  const startX = (width - size) * 0.5;
  const startY = (height - size) * 0.5;
  noFill();
  stroke('#e4c1f9');
  strokeWeight(2);
  for (let y = 0; y < cols; y++) {
    for (let x = 0; x < cols; x++) {
      rect(startX + x * cell, startY + y * cell, cell, cell);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
