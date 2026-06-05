const COLS = 80;
const ROWS = 50;
let grid;
let rules;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
  initAutomaton();
}

function draw() {
  background('#000');
  const cellW = width / COLS;
  const cellH = height / ROWS;
  noStroke();
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x]) {
        fill('#f72585');
        rect(x * cellW, y * cellH, cellW + 1, cellH + 1);
      }
    }
  }
  stepAutomaton();
}

function initAutomaton() {
  grid = Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => random() > 0.6 ? 1 : 0));
  rules = Array.from({ length: 9 }, () => floor(random(2)));
}

function stepAutomaton() {
  const next = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      let n = 0;
      for (let oy = -1; oy <= 1; oy++) {
        for (let ox = -1; ox <= 1; ox++) {
          if (!ox && !oy) continue;
          const nx = (x + ox + COLS) % COLS;
          const ny = (y + oy + ROWS) % ROWS;
          n += grid[ny][nx];
        }
      }
      next[y][x] = rules[n];
    }
  }
  grid = next;
}

function mousePressed() {
  initAutomaton();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
