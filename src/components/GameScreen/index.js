import './style.less';

import DOMScreen from './index.html';

import Deck from './scripts/deck';
import { unflipAllCards } from './scripts/deckOperation';
import gameRules from './scripts/gameRules';


function startGame() {
  const cards = document.querySelectorAll('.card');
  cards.onload = setTimeout(() => {
      unflipAllCards(cards);
      gameRules.newAttempt(cards);
  }, 5000);
}


export default function GameScreen () {
  const app = document.querySelector('#App');
  app.innerHTML = DOMScreen;
  const btn = document.querySelector('.btn');
  btn.onclick = GameScreen;

  const deck = new Deck;
  deck.render();
  
  startGame();
}