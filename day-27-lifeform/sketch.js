let branches = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke('#b7e4c7');
  noFill();
  initLifeform();
}

function draw() {
  background('#010101');
  branches.forEach((b) => line(b.x1, b.y1, b.x2, b.y2));
  growLifeform();
}

function initLifeform() {
  branches = [{ x1: width * 0.5, y1: height, x2: width * 0.5, y2: height * 0.8, depth: 0 }];
}

function growLifeform() {
  const newBranches = [];
  branches.forEach((b) => {
    if (b.depth > 6) return;
    const angle = random(-PI / 3, PI / 3);
    const len = dist(b.x1, b.y1, b.x2, b.y2) * random(0.6, 0.85);
    const nx = b.x2 + cos(angle) * len;
    const ny = b.y2 - sin(angle) * len;
    newBranches.push({ x1: b.x2, y1: b.y2, x2: nx, y2: ny, depth: b.depth + 1 });
    if (random() > 0.5) {
      const angle2 = random(-PI / 3, PI / 3);
      const nx2 = b.x2 + cos(angle2) * len;
      const ny2 = b.y2 - sin(angle2) * len;
      newBranches.push({ x1: b.x2, y1: b.y2, x2: nx2, y2: ny2, depth: b.depth + 1 });
    }
  });
  branches = branches.concat(newBranches);
  if (branches.length > 2000) initLifeform();
}

function mousePressed() {
  initLifeform();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initLifeform();
}
