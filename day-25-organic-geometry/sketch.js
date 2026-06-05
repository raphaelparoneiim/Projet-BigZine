let blobs = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 1);
  noFill();
  generateBlobs();
}

function draw() {
  background('#010203');
  blobs.forEach((blob, i) => {
    stroke(blob.hue, 70, 100, 0.7);
    beginShape();
    for (let angle = 0; angle <= TWO_PI + 0.1; angle += 0.2) {
      const r = blob.radius + noise(angle * blob.noiseScale, frameCount * 0.01 + i) * blob.radius * 0.4;
      const x = blob.x + cos(angle) * r;
      const y = blob.y + sin(angle) * r;
      curveVertex(x, y);
    }
    endShape();
  });
}

function generateBlobs() {
  blobs = [];
  for (let i = 0; i < 5; i++) {
    blobs.push({
      x: random(width * 0.2, width * 0.8),
      y: random(height * 0.2, height * 0.8),
      radius: random(60, 150),
      hue: random(120, 300),
      noiseScale: random(0.5, 1.2),
    });
  }
}

function mousePressed() {
  generateBlobs();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  generateBlobs();
}
