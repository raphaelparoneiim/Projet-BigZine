const LETTERS = 'GENUARY'.split('');

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  stroke('#f7f7f7');
  strokeWeight(10);
  noFill();
}

function draw() {
  background('#050505');
  const size = min(width, height) * 0.08;
  const spacing = size * 1.2;
  translate(width * 0.5 - (LETTERS.length - 1) * spacing * 0.5, height * 0.5);
  for (let i = 0; i < LETTERS.length; i++) {
    push();
    translate(i * spacing, 0);
    drawLetter(LETTERS[i], size);
    pop();
  }
}

function drawLetter(letter, s) {
  const h = s * 0.5;
  switch (letter) {
    case 'G':
      arc(0, 0, s, s, PI * 0.2, PI * 1.8);
      line(0, 0, h, 0);
      break;
    case 'E':
      line(-h, -h, -h, h);
      line(-h, -h, h, -h);
      line(-h, 0, h * 0.2, 0);
      line(-h, h, h, h);
      break;
    case 'N':
      line(-h, h, -h, -h);
      line(-h, -h, h, h);
      line(h, h, h, -h);
      break;
    case 'U':
      line(-h, -h, -h, h * 0.2);
      arc(0, h * 0.2, s, s * 0.8, PI * 0.1, PI - PI * 0.1);
      line(h, -h, h, h * 0.2);
      break;
    case 'A':
      line(-h, h, 0, -h);
      line(0, -h, h, h);
      line(-h * 0.4, 0, h * 0.4, 0);
      break;
    case 'R':
      line(-h, h, -h, -h);
      arc(-h * 0.2, -h * 0.3, s, s, -PI * 0.6, PI * 0.3);
      line(-h * 0.2, 0, h, h);
      break;
    case 'Y':
      line(0, 0, 0, h);
      line(-h, -h, 0, 0);
      line(0, 0, h, -h);
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}
