let linesData = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke('#0d0d0d');
  strokeWeight(1.5);
  noFill();
  generateLines();
  noLoop();
}

function draw() {
  background('#f8f9f4');
  linesData.forEach((path) => {
    beginShape();
    path.forEach((pt) => vertex(pt.x, pt.y));
    endShape();
  });
}

function generateLines() {
  linesData = [];
  const cols = 8;
  for (let c = 0; c < cols; c++) {
    const path = [];
    for (let y = 0; y <= height; y += 20) {
      const x = map(c, 0, cols - 1, width * 0.2, width * 0.8) + sin(y * 0.01 + c) * 30;
      path.push({ x, y });
    }
    linesData.push(path);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  generateLines();
  redraw();
}
