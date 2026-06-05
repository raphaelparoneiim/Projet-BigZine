const FIB = [1, 1, 2, 3, 5, 8, 13, 21];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('#030305');
  const total = FIB.reduce((a, b) => a + b, 0);
  const maxW = width * 0.8;
  const h = min(height * 0.4, 200);
  let x = (width - maxW) * 0.5;
  noStroke();
  for (let i = 0; i < FIB.length; i++) {
    const w = (FIB[i] / total) * maxW;
    fill(150 + i * 12, 120, 200);
    rect(x, height * 0.5 - h * 0.5, w, h, 6);
    x += w + 2;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
