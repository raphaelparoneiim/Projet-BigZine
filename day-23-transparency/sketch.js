function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('#050505');
  noStroke();
  for (let i = 0; i < 20; i++) {
    const size = random(80, 320);
    const x = random(width * 0.2, width * 0.8);
    const y = random(height * 0.2, height * 0.8);
    fill(255, 255, 255, 60);
    circle(x, y, size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
