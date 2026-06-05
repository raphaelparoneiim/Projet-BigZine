let population = [];
const POP = 24;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 1);
  initPopulation();
  frameRate(6);
}

function draw() {
  background('#030207');
  noStroke();
  population.forEach((g) => {
    fill(g.color);
    circle(g.x, g.y, g.size);
  });
  evolve();
}

function initPopulation() {
  population = Array.from({ length: POP }, () => ({
    x: random(width),
    y: random(height),
    size: random(20, 80),
    color: color(random(120, 320), random(50, 90), random(50, 100), 0.8),
  }));
}

function evolve() {
  const survivors = population.slice(0, POP / 2);
  const offspring = survivors.map((parent) => ({
    x: constrain(parent.x + random(-40, 40), 0, width),
    y: constrain(parent.y + random(-40, 40), 0, height),
    size: constrain(parent.size + random(-10, 10), 10, 120),
    color: color((hue(parent.color) + random(-20, 20) + 360) % 360, constrain(saturation(parent.color) + random(-10, 10), 30, 100), constrain(brightness(parent.color) + random(-10, 10), 40, 100), 0.8),
  }));
  population = survivors.concat(offspring);
}

function mousePressed() {
  initPopulation();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initPopulation();
}
