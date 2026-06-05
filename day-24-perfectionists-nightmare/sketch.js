function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('#141414');
  const cols = 12;
  const rows = 8;
  const cell = min(width, height) * 0.07;
  const startX = (width - cols * cell) * 0.5;
  const startY = (height - rows * cell) * 0.5;
  stroke('#f07167');
  noFill();
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const jitter = random(-cell * 0.3, cell * 0.3);
      rect(startX + x * cell + jitter, startY + y * cell + jitter, cell - jitter, cell - jitter);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
