function setup() {
  noCanvas();
  document.body.style.margin = '0';
  document.body.style.background = '#050505';
  createPattern();
}

function createPattern() {
  const container = createDiv('').style('display', 'grid').style('grid-template-columns', 'repeat(8, 1fr)').style('gap', '6px').style('padding', '40px');
  container.parent(document.body);
  for (let i = 0; i < 64; i++) {
    const tile = createDiv('');
    tile.parent(container);
    tile.size(60, 60);
    tile.style('background', i % 3 === 0 ? '#f94144' : i % 3 === 1 ? '#90be6d' : '#577590');
    tile.style('box-shadow', '0 0 10px rgba(0,0,0,0.4)');
  }
}
