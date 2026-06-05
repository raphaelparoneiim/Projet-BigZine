function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('#050505');
  splitCell(40, 40, width - 80, height - 80, 0);
}

function splitCell(x, y, w, h, depth) {
  stroke('#f8edeb');
  noFill();
  rect(x, y, w, h);
  if (depth > 4 || min(w, h) < 60) return;
  if (random() > 0.5) {
    const hw = w * random(0.3, 0.7);
    splitCell(x, y, hw, h, depth + 1);
    splitCell(x + hw, y, w - hw, h, depth + 1);
  } else {
    const hh = h * random(0.3, 0.7);
    splitCell(x, y, w, hh, depth + 1);
    splitCell(x, y + hh, w, h - hh, depth + 1);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
