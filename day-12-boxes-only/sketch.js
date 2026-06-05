function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('#050505');
  const size = min(width, height) * 0.8;
  translate(width * 0.5, height * 0.5);
  rectMode(CENTER);
  noFill();
  stroke('#f5f3f4');
  for (let i = 0; i < 40; i++) {
    const s = size * (1 - i / 40);
    rect(0, 0, s, s);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
