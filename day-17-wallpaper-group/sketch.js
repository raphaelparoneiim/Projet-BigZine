function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('#020205');
  const tile = 90;
  for (let y = -tile; y < height + tile; y += tile) {
    for (let x = -tile; x < width + tile; x += tile) {
      drawMotif(x, y, tile);
    }
  }
}

function drawMotif(x, y, size) {
  push();
  translate(x, y);
  stroke('#fefefe');
  noFill();
  rect(0, 0, size, size);
  fill('#4cc9f0');
  circle(size * 0.5, size * 0.5, size * 0.6);
  fill('#f72585');
  rect(size * 0.1, size * 0.1, size * 0.3, size * 0.3);
  rect(size * 0.6, size * 0.6, size * 0.3, size * 0.3);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
