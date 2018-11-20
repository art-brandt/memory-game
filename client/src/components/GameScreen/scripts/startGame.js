import score from './score.js';
import EndScreen from '../../EndScreen';

export default function startGame() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.addEventListener('click', flipCard));

  let firstCard, secondCard;

  let deckState = {
    hasFlippedCard: false,
    lockDeck: false,
    reset: function() {
      [deckState.hasFlippedCard, deckState.lockDeck] = [false, false];
      [firstCard, secondCard] = [null, null];
    }
  }

  function flipCard() {
    if (deckState.lockDeck) return;

    this.classList.add('flip');
    this.dataset.tid = 'Card-flipped';

    if (!deckState.hasFlippedCard) {
      deckState.hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    deckState.hasFlippedCard = false;
 
    checkForMatch();
  }

  function checkForMatch() {
    deckState.lockDeck = true;
    if (firstCard.dataset.name === secondCard.dataset.name) {

      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);

      score.add();
      score.init();

      setTimeout(removeCardsFromDeck, 1300);
      
      return;
    }
 
    unflipSelectedCards();
  }

  function unflipSelectedCards() {
    deckState.lockDeck = true;

    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      firstCard.dataset.tid = 'Card';
      secondCard.dataset.tid = 'Card'; 

      deckState.reset();

      score.remove();
      score.init();
    }, 1300);
  }
 
  function removeCardsFromDeck() {
    firstCard.innerHTML = '';
    secondCard.innerHTML = '';

    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    firstCard.removeAttribute('data-tid');
    secondCard.removeAttribute('data-tid');

    firstCard.removeAttribute('data-name');
    secondCard.removeAttribute('data-name');

    firstCard.classList.add('empty-place');
    secondCard.classList.add('empty-place');

    deckState.reset();
    checkEndGame();
  }

  function checkEndGame() {
    const emptyPlaces = document.querySelectorAll('.empty-place');
    if (emptyPlaces.length === 18) {
      EndScreen();
      score.init();
    } else {
      return;
    }
  }

}