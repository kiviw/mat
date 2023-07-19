const matrixContainer = document.getElementById('matrix-container');
const matrix = document.createElement('div');
matrix.id = 'matrix';
matrixContainer.appendChild(matrix);

const link = 'cryptosynapse.ru'; // Hidden link

function createMatrix() {
  let characters = '';
  for (let i = 33; i <= 126; i++) {
    characters += String.fromCharCode(i);
  }
  return characters.split('');
}

function getRandomCharacter(characters) {
  return characters[Math.floor(Math.random() * characters.length)];
}

function createMatrixLine(columns) {
  let line = '';
  for (let i = 0; i < columns; i++) {
    line += getRandomCharacter(matrixCharacters);
  }
  return line;
}

function animateMatrix() {
  const matrixCharacters = createMatrix();
  const columns = Math.ceil(matrixContainer.offsetWidth / 12);
  const rows = Math.ceil(matrixContainer.offsetHeight / 24);

  matrix.innerHTML = '';

  for (let i = 0; i < rows; i++) {
    const line = createMatrixLine(columns);
    matrix.innerHTML += `<p>${line}</p>`;
  }

  setTimeout(() => {
    animateMatrix();
  }, 1000);
}

// Initial setup
animateMatrix();
    
