let lightsOn = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(lightsOn ? '#fff6d9' : '#050505');
  noStroke();
  if (lightsOn) {
    fill('#ffe066');
    ellipse(width * 0.5, height * 0.35, 160, 160);
    fill(255, 200, 120, 140);
    ellipse(width * 0.5, height * 0.6, 380, 120);
  } else {
    fill('#111');
    ellipse(width * 0.5, height * 0.35, 120, 120);
    fill(0, 120);
    ellipse(width * 0.5, height * 0.6, 280, 80);
  }
}

function mousePressed() {
  lightsOn = !lightsOn;
  redraw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
