let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(1000);
  noLoop();
}

function draw() {
  randomSeed(seed);
  background('#030304');
  translate(width * 0.5, height * 0.5);
  fill('#f1c27d');
  noStroke();
  ellipse(0, 0, 260, 300);
  fill('#1c1f24');
  ellipse(-50, -30, 40, 50);
  ellipse(50, -30, 40, 50);
  stroke('#f4a261');
  strokeWeight(12);
  noFill();
  arc(0, 60, 160, 120, 0, PI);
  stroke('#2a9d8f');
  for (let i = 0; i < 40; i++) {
    const angle = map(i, 0, 40, -PI / 2, PI / 2);
    const len = random(80, 160);
    line(cos(angle) * 120, -140 + sin(angle) * 40, cos(angle) * len, -200 + sin(angle) * 40);
  }
}

function mousePressed() {
  seed = random(1000);
  redraw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
