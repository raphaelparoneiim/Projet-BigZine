function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('#050505');
  const cols = 10;
  const rows = 6;
  const cell = min(width, height) * 0.08;
  const startX = width * 0.2;
  const startY = height * 0.2;
  noStroke();
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill('#f7fff7');
      rect(startX + x * cell, startY + y * cell, cell * 0.8, cell * 0.8, 4);
      const chaosX = startX + width * 0.35 + random(-cell, cell);
      const chaosY = startY + y * cell + random(-cell, cell);
      fill('#ff5d8f');
      circle(chaosX, chaosY, cell * random(0.3, 0.9));
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
