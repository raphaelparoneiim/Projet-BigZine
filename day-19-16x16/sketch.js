const GRID_SIZE = 16;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('#010101');
  const cell = min(width, height) * 0.6 / GRID_SIZE;
  const startX = (width - cell * GRID_SIZE) * 0.5;
  const startY = (height - cell * GRID_SIZE) * 0.5;
  colorMode(HSB, 360, 100, 100, 1);
  noStroke();
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      fill(map(x, 0, GRID_SIZE, 200, 360), map(y, 0, GRID_SIZE, 40, 90), 100);
      rect(startX + x * cell, startY + y * cell, cell, cell);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
