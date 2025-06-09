const { Deck } = require('./p5-class');

// Function to play one round of high card (or base for Blackjack later)
function playRound() {
  const deck = new Deck();
  deck.shuffle();

  const playerCard = deck.draw();
  const aiCard = deck.draw();

  let result = '';
  if (playerCard.value > aiCard.value) {
    result = 'Player wins!';
  } else if (playerCard.value < aiCard.value) {
    result = 'AI wins!';
  } else {
    result = 'It\'s a tie!';
  }

  return {
    playerCard,
    aiCard,
    result,
  };
}

// Export the function so the server can use it
module.exports = { playRound };

// Console test (remove later if needed)
console.log(playRound());