document.addEventListener('DOMContentLoaded', function () {
    const gameContainer = document.getElementById('gameContainer');
    const gridLength = 5;
  
    function toggleSquare(event) {
      const clickedSquare = event.target;
      clickedSquare.classList.toggle('is-off');
      toggleNearbySquares(clickedSquare);
    }
  
    function toggleNearbySquares(square) {
      const [row, col] = square.id.split('-').slice(1).map(Number);
  
      [
        { row: row - 1, col },
        { row: row + 1, col },
        { row, col: col - 1 },
        { row, col: col + 1 },
      ].forEach(adjacent => {
        const adjacentSquare = document.getElementById(`square-${adjacent.row}-${adjacent.col}`);
        if (adjacentSquare) {
          adjacentSquare.classList.toggle('is-off');
        }
      });
    }
  
    function createGame() {
      gameContainer.innerHTML = '';
      for (let row = 0; row < gridLength; row++) {
        for (let col = 0; col < gridLength; col++) {
          const square = document.createElement('div');
          square.classList.add('square');
          square.addEventListener('click', toggleSquare);
          square.id = `square-${row}-${col}`;
          gameContainer.appendChild(square);
        }
      }
      checkLayout();
    }
  
    function checkLayout() {
      const totalSquares = gridLength * gridLength;
      const numDarkSquares = Math.floor(Math.random() * (totalSquares - 1)) + 1;
  
      for (let i = 0; i < numDarkSquares; i++) {
        const randomRow = Math.floor(Math.random() * gridLength);
        const randomCol = Math.floor(Math.random() * gridLength);
  
        const randomSquare = document.getElementById(`square-${randomRow}-${randomCol}`);
        if (randomSquare && !randomSquare.classList.contains('is-off')) {
          randomSquare.classList.add('is-off');
          toggleNearbySquares(randomSquare);
        } else {
          i--;
        }
      }
    }
  
    createGame();
  
    gameContainer.addEventListener('click', function () {
      if (checkGame()) {
        const winner = document.getElementsByClassName('congrats')[0];
        winner.innerHTML = 'You won the game, congrats because this game is extremely hard to solve at least for me it is, so congrats and thanks for the time you put into my awesome game, geez still can\'t believe you did it. WOOOHOOOO!!!! But can you do it again?';
      }
    });
  
    function checkGame() {
      const darkSquares = document.querySelectorAll('.is-off');
      return darkSquares.length === gridLength * gridLength;
    }
  });
  
  function gameRestart() {
    location.reload();
  }
  