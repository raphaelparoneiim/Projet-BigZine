const GRID = 24;
let seed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();
  noLoop();
  seed = random(1000);
}

function draw() {
  randomSeed(seed);
  background('#010101');
  const cell = floor(min(width, height) / GRID);
  const offsetX = (width - cell * GRID) * 0.5;
  const offsetY = (height - cell * GRID) * 0.5;
  for (let y = 0; y < GRID; y++) {
    for (let x = 0; x < GRID; x++) {
      const shade = floor(random(30, 230));
      fill(shade);
      noStroke();
      rect(offsetX + x * cell, offsetY + y * cell, cell, cell);
    }
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
