// p5-class.js

class Card {
    constructor(suit, rank, value) {
      this.suit = suit;
      this.rank = rank;
      this.value = value;
    }
  }
  
  class Deck {
    constructor() {
      this.cards = [];
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const ranks = [
        { rank: '2', value: 2 }, { rank: '3', value: 3 }, { rank: '4', value: 4 },
        { rank: '5', value: 5 }, { rank: '6', value: 6 }, { rank: '7', value: 7 },
        { rank: '8', value: 8 }, { rank: '9', value: 9 }, { rank: '10', value: 10 },
        { rank: 'J', value: 11 }, { rank: 'Q', value: 12 }, { rank: 'K', value: 13 }, { rank: 'A', value: 14 }
      ];
  
      for (const suit of suits) {
        for (const { rank, value } of ranks) {
          this.cards.push(new Card(suit, rank, value));
        }
      }
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    draw() {
      return this.cards.pop();
    }
  }
  
  module.exports = { Card, Deck };