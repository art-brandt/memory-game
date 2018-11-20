import './main.less';

import DOMScreen from './index.html';

import Deck from '../Deck';
import startGame from './scripts/startGame.js'

export default function GameScreen () {
  const app = document.querySelector('#App');
  app.innerHTML = DOMScreen;
  const btn = document.querySelector('.btn');
  btn.onclick = GameScreen;

  const deck = new Deck;
  deck.mountCards();

  const cards = document.querySelectorAll('.card');

  cards.onload = (function() {
    setTimeout(() => {
      cards.forEach( card => { 
        card.classList.remove('flip');
        card.dataset.tid = 'Card';
      });
      startGame();
    }, 5000);
  })()
  
}