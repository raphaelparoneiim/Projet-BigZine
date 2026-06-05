function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
}

function draw() {
  background('#020202');
  for (let i = 0; i < 8; i++) {
    const y = random(height);
    const h = random(10, 80);
    fill(random(255), random(255), random(255), 120);
    rect(random(-width * 0.2, width * 0.2), y, width * 1.2, h);
  }
  noFill();
  stroke('#f94144');
  strokeWeight(4);
  const bug = sin(frameCount * 0.1) * 40;
  rect(width * 0.3 + bug, height * 0.3, width * 0.4, height * 0.4);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
