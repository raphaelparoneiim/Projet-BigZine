let skyline = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  initCity();
}

function draw() {
  background('#01030a');
  noStroke();
  for (const b of skyline) {
    fill(b.color);
    rect(b.x, height - b.h, b.w, b.h);
    for (let y = 10; y < b.h; y += 18) {
      for (let x = 6; x < b.w; x += 14) {
        if (random() < 0.7) {
          fill(random() < 0.2 ? '#ffd166' : '#0b3a69');
          rect(b.x + x, height - b.h + y, 8, 10, 2);
        }
      }
    }
  }
}

function mousePressed() {
  initCity();
}

function initCity() {
  skyline = [];
  for (let i = 0; i < 40; i++) {
    skyline.push({
      x: random(width),
      w: random(20, 80),
      h: random(height * 0.2, height * 0.8),
      color: color(random(10, 40)),
    });
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initCity();
}
