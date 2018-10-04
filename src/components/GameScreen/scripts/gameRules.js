import { flipOneCard, unflipAllCards, removeCardFromDeck} from './deckOperation.js'; 
import score from './score.js';
import EndScreen from '../../EndScreen';

const gameRules = {

    watcher: function () {
        flipOneCard(this);
        let flippedCard = document.querySelectorAll('[data-tid="Card-flipped"]');
        let cards = document.querySelectorAll('.card');
        if (flippedCard.length == 2) {
            gameRules.endAttempt(cards);
            if (flippedCard[0].dataset.name == flippedCard[1].dataset.name) {
                setTimeout(function(){ 
                    removeCardFromDeck(flippedCard);
                    let emptyCard = document.querySelectorAll('.empty-card');
                    if (emptyCard.length == 18) { EndScreen() };
                    score.add();
                    score.init();
                    gameRules.newAttempt(cards);   
                }, 1000);
            } else {
                let cards = document.querySelectorAll('.card');
                setTimeout(function() {
                    score.remove();
                    score.init();
                    unflipAllCards(flippedCard);
                    gameRules.newAttempt(cards);
                }, 1000);
            }
        }
    },

    newAttempt: function(cards) {
        for (let card of cards) {
            card.addEventListener('click', gameRules.watcher);
        }
    },

    endAttempt: function(cards) {
        for (let card of cards) {
            card.removeEventListener('click', gameRules.watcher);
        }
    }
}

export default gameRules;