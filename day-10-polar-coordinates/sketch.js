function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 1);
}

function draw() {
  background('#010409');
  translate(width * 0.5, height * 0.5);
  noFill();
  beginShape();
  for (let angle = 0; angle < 720; angle += 2) {
    const r = map(noise(angle * 0.01, frameCount * 0.01), 0, 1, 50, min(width, height) * 0.4);
    const x = cos(radians(angle)) * r;
    const y = sin(radians(angle)) * r;
    stroke(map(angle, 0, 720, 0, 360), 80, 100, 0.8);
    vertex(x, y);
  }
  endShape();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
