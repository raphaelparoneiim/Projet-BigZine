let pathPoints = [];
const STEP = 18;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke('#ffbe0b');
  strokeWeight(3);
  resetPath();
}

function draw() {
  background('#050505');
  beginShape();
  pathPoints.forEach((pt) => vertex(pt.x, pt.y));
  endShape();
  stepPath();
}

function resetPath() {
  pathPoints = [{ x: width * 0.5, y: height * 0.5, dir: 0 }];
}

function stepPath() {
  const last = pathPoints[pathPoints.length - 1];
  const rule = (floor(last.x / STEP) + floor(last.y / STEP)) % 4;
  const dir = (last.dir + rule + 1) % 4;
  const dx = [STEP, 0, -STEP, 0][dir];
  const dy = [0, -STEP, 0, STEP][dir];
  const nx = constrain(last.x + dx, STEP, width - STEP);
  const ny = constrain(last.y + dy, STEP, height - STEP);
  pathPoints.push({ x: nx, y: ny, dir });
  if (pathPoints.length > 300) pathPoints.shift();
}

function mousePressed() {
  resetPath();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resetPath();
}
