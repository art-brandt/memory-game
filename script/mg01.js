

//создание функции перетосовки
var shuffle = function () {
  return Math.random() - 0.5;
}

var suits = ['C', 'D', 'H', 'S'];
var pics = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
var fullDeck = [];
for (var j = 0; j < suits.length; j++) {
    for (var i=0; i < pics.length; i++) {
        var card = pics[i] + suits[j];
        fullDeck.push(card);
    }
}
fullDeck.sort(shuffle);

var doubleDeck = [];
for (var i = 0; i < 18 / 2; i++) {
    var fromFullDeck = fullDeck[i];
    doubleDeck.push(fromFullDeck, fromFullDeck);
}
doubleDeck.sort(shuffle);
console.log(doubleDeck);

var objCards = [];
for(var i = 0; i < doubleDeck.length; i++) {
    objCards[i] = {
      name: doubleDeck[i],
      flipped: true,
      bgPath: "url('./img/cards/" + doubleDeck[i] + ".png')"
    }
 }
console.log(objCards);


var cards = document.querySelector('.cards-container');
for (var i = 0; i < doubleDeck.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('name', objCards[i].name);
    card.style.backgroundImage = objCards[i].bgPath;
    cards.appendChild(card);
}


var flippedAllCards = function() {
    var flac = document.querySelectorAll('.card');
    for (i = 0; i < flac.length; i++) {
        flac[i].classList.add('back');
    }
}

setInterval(flippedAllCards, 5000);

var fac = document.querySelectorAll('.card');
fac.addEventListener('click',  function() {
    fac[1].classList.remove('back');
});

