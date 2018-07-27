//создание функции перетосовки
var shuffle = function (a, b) {
  return Math.random() - 0.5;
}

//закрытие карт
var flippedCard = function() {
    card.classList.add('back');
}

// CDHS -  2 3 4 5 6 7 8 9 0 J Q K A создаём массив с именем карт
var suits = ['C', 'D', 'H', 'S'];
var pics = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
var fullDeck = [];
for (var j = 0; j < suits.length; j++) {
    for (var i=0; i < pics.length; i++) {
        var card = pics[i] + suits[j];
        fullDeck.push(card);
    }
}
//перетосовываем всю изначальную колоду колоду
fullDeck.sort(shuffle);

//Создаём массив-колоду из повторяющихся карт
var doubleDeck = [];
for (var i = 0; i < 18 / 2; i++) {
    var fromFullDeck = fullDeck[i];
    doubleDeck.push(fromFullDeck, fromFullDeck);
}
//перетосовываем эту колоду
doubleDeck.sort(shuffle);
//создаём массив имен колоды
var pathCardNames =[]
for (var i = 0; i < doubleDeck.length; i++) {
    pathCardNames.push("url('./img/cards/" + doubleDeck[i] + ".png')");
}

// все карты в начале игры flipped (перевернуты)
var cards = document.querySelectorAll('.cards');
var countDoubleDeck = -1;
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 6; j++) {
            countDoubleDeck++;
            var card = document.createElement('li');
            card.classList.add('card');
            card.classList.add('flipped');
            card.style.backgroundImage = pathCardNames[countDoubleDeck];
            cards[i].appendChild(card);
    }
}

window.onload = setTimeout(flippedCard(), 15000);
