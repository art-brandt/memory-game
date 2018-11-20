import './less/main.less';
import Card from '../Card';

const defaultSuits = ['C', 'D', 'H', 'S'];
const defaultPics = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];

function shakedAndReturnNewArr(arr) {
    let newArr = [...arr];
    return newArr.sort( () => { return Math.random() - 0.5 } ); 
}

export default class Deck {
    constructor(suits = defaultSuits, pics = defaultPics, quanityForGame = 18) {
        this.suits = suits;
        this.pics = pics;
        this.quanityForGame = quanityForGame;
        this.fullNames = () => {
            let names = []
            for (let s of this.suits) {
                for (let p of this.pics) {
                    let name = p + s;
                    names.push(name);
                };
            };
            return names;
        }

        this.shakedFullNames = () => {
            return shakedAndReturnNewArr(this.fullNames())
        };

        this.cardsImgRequireAll = () => {
            for (let card of this.fullNames()) {
                require(`./image/cards/${card}.png`);
            }
          }

        this.namesForGame = () => {
            const arr = this.shakedFullNames();
            let names = [];
            for (let i = 0; i < this.quanityForGame / 2; i++) {
                let name = arr[i];
                names.push(name, name);
            }
            return names;
        }

        this.shakedNamesForGame = () => {
            return shakedAndReturnNewArr(this.namesForGame());
        }

        this.deckForGame = () => {
            const namesForGame = this.shakedNamesForGame();
            const cards = []
            namesForGame.map( name => {
                cards.push(Card(name));
            });
            return cards;
        }
    }

    mountCards() {
        const deckForGame = this.deckForGame();
        const deck = document.getElementById('deck');
        deckForGame.map( card => {
            deck.appendChild(card);
        });
    }
}

