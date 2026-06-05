let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke('#ffafcc');
  strokeWeight(4);
  buildLine();
}

function draw() {
  background('#020202');
  beginShape();
  points.forEach((p) => curveVertex(p.x, p.y));
  endShape();
  animateLine();
}

function buildLine() {
  points = [];
  for (let i = 0; i < 120; i++) {
    points.push({
      x: map(i, 0, 119, width * 0.2, width * 0.8),
      y: height * 0.5 + noise(i * 0.05) * 200 - 100,
      offset: random(TWO_PI),
    });
  }
}

function animateLine() {
  const t = frameCount * 0.01;
  points.forEach((p) => {
    p.y += sin(t + p.offset) * 0.5;
  });
}

function mousePressed() {
  buildLine();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buildLine();
}
