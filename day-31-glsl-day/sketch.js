let shaderProgram;
let t = 0;

function preload() {
  shaderProgram = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  t += deltaTime * 0.001;
  shader(shaderProgram);
  shaderProgram.setUniform('u_resolution', [width, height]);
  shaderProgram.setUniform('u_time', t);
  rect(0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
