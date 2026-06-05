let sourceLines;

function preload() {
  sourceLines = loadStrings('sketch.js');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('monospace');
  textSize(12);
  noLoop();
}

function draw() {
  background('#050505');
  fill('#d1f7ff');
  const block = sourceLines.join('
');
  text(block, 40, 40, width - 80, height - 80);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
