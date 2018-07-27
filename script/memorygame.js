var score = 0;

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

var objCards = [];
for(var i = 0; i < doubleDeck.length; i++) {    
    objCards[i] = {
        name: doubleDeck[i],
        bgPath: "url('./image/cards/" + doubleDeck[i] + ".png')",
        dataName: '[data-name="' + doubleDeck[i] + '"]'
    }
 }

//Проверка сколько карт осталось
var testLostCards = function() {
    var value = $(".card").filter("empty-card");
}

//Попытка угадать
var tryGame = function() {
    $(".card").on("click", function(event){
        $(this).removeClass("back");
        $(this).attr("data-flipped","true");
        var clickedCards = $('.card').filter('[data-flipped="true"]');
        if (clickedCards.length == 2) {
            var firstClickedCardName = $(clickedCards[0]).attr("data-name");
            var secondClickedCardName = $(clickedCards[1]).attr("data-name");
            $(".card").off("click");
            if (firstClickedCardName == secondClickedCardName) {
                setTimeout(function(){ 
                    $(clickedCards[0]).addClass("empty-card").css("background-image","none").removeAttr("data-flipped").removeAttr("data-name");
                    $(clickedCards[1]).addClass("empty-card").css("background-image","none").removeAttr("data-flipped").removeAttr("data-name");
                    score = score + $(".card").filter(".back").length * 42;
                    $(".score").text(score);
                    
                    if($(".empty-card").length == doubleDeck.length) {
                        console.log("Игра окончилась");
                        $("body").html('<div class="main-container"><img class="end-image" src="./image/Group.png"><p>Поздравляем!<br>Ваш итоговый счёт: <span class="score"></span> </p><a class="btn start-game-btn" href="./game.html">Ещё раз</a></div>');
                        setTimeout(function(){
                            $(".score").text(score);
                                   }, 200);
                    }
                    
                    tryGame();
                }, 1400);
            } else {
                setTimeout(function(){
                    score = score - $(".card").filter(".back").length * 42;
                    $(".score").text(score);
                    $(clickedCards[0]).attr("data-flipped","false").addClass('back');
                    $(clickedCards[1]).attr("data-flipped","false").addClass('back');
                    tryGame();
                }, 1400);
            }
        }
    });
        
}

//начинаем игру
var startGame = function(inGame) {
    if (inGame == true) {
        $(".card").addClass('back');
        console.log("Игра началась"); 
        tryGame();
    }
}

$(document).ready(function() {
    for (var i = 0; i < doubleDeck.length; i++) {
        $('.cards-container').append('<div class="card" data-name="' + objCards[i].name +'"></div');
        $(".card:last").css("background-image", objCards[i].bgPath);
    }
    setTimeout(startGame, 5000, true);
    
});









