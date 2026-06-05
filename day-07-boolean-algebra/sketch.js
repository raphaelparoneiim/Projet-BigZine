const STATES = [
  [0, 0],
  [0, 1],
  [1, 0],
  [1, 1],
];
const OPS = [
  { name: 'AND', fn: (a, b) => (a & b) },
  { name: 'OR', fn: (a, b) => (a | b) },
  { name: 'XOR', fn: (a, b) => (a ^ b) },
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(16);
  noLoop();
}

function draw() {
  background('#040404');
  const cell = min(width * 0.15, 80);
  const startX = width * 0.5 - cell * (OPS.length + 2) * 0.5;
  const startY = height * 0.5 - cell * STATES.length * 0.5;
  stroke('#2b2b2b');
  noFill();
  for (let r = 0; r <= STATES.length; r++) {
    line(startX, startY + r * cell, startX + cell * (OPS.length + 2), startY + r * cell);
  }
  for (let c = 0; c <= OPS.length + 2; c++) {
    line(startX + c * cell, startY, startX + c * cell, startY + cell * STATES.length);
  }
  noStroke();
  fill('#dddddd');
  text('A', startX + cell * 0.5, startY - cell * 0.5);
  text('B', startX + cell * 1.5, startY - cell * 0.5);
  OPS.forEach((op, i) => {
    text(op.name, startX + cell * (i + 2.5), startY - cell * 0.5);
  });
  for (let r = 0; r < STATES.length; r++) {
    const [a, b] = STATES[r];
    fill('#ffb703');
    text(a, startX + cell * 0.5, startY + r * cell + cell * 0.5);
    text(b, startX + cell * 1.5, startY + r * cell + cell * 0.5);
    OPS.forEach((op, c) => {
      const result = op.fn(a, b);
      fill(result ? '#90f1ef' : '#555');
      text(result, startX + cell * (c + 2.5), startY + r * cell + cell * 0.5);
    });
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
