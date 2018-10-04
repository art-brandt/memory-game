const defaultSuits = ['C', 'D', 'H', 'S'];
const defaultPics = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];

export default class Deck {
    constructor(suits = defaultSuits, pics = defaultPics, quanityForGame = 18) {
        this.suits = suits;
        this.pics = pics;
        this.quanityForGame = quanityForGame;
        this.shaked = (arr) => { return arr.sort( () => { return Math.random() - 0.5 } ); }
        this.fullDeck = () => {
            let result = []
            for (let s of this.suits) {
                for (let p of this.pics) {
                    let name = p + s;
                    result.push({ name });
                };
            };
            return this.shaked(result);
        }
        this.importImgs = () => {
            for (let card of this.fullDeck) {
                require(`../image/cards/${card.name}.png`)
            }
        }
        this.deckForGame = () => {
            const fullDeck = this.fullDeck();
            let result = [];
            for (let i = 0; i < this.quanityForGame / 2; i++) {
                let card = fullDeck[i];
                result.push(card, card);
            }
            return this.shaked(result);
        }
    }

    render() {
        const card = this.deckForGame();
        for (let i = 0; i < card.length; i++) {
            let div = document.createElement('div');
            div.className = 'card';
            div.setAttribute('data-name', card[i].name);
            div.setAttribute('data-tid','Card-flipped');
            div.style.backgroundImage = `url(./image/${card[i].name}.png)`;
            let deck = document.getElementById('deck');
            deck.appendChild(div);
        }
    }
}