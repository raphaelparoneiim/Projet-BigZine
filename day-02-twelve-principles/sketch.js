const PRINCIPLES = 12;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background('#040408');
  translate(width * 0.5, height * 0.5);
  stroke('#f2a65a');
  strokeWeight(3);
  noFill();
  for (let i = 0; i < PRINCIPLES; i++) {
    push();
    rotate((360 / PRINCIPLES) * i + frameCount);
    const len = min(width, height) * 0.3 + sin(frameCount + i * 10) * 40;
    line(0, 0, len, 0);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
