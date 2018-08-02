var score = 0;

var suits = ['C', 'D', 'H', 'S'];
var pics = ['2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K', 'A'];
const allCards = [];
for (let j = 0; j < suits.length; j++) {
    for (var i=0; i < pics.length; i++) {
        let cardName = pics[i] + suits[j];
        allCards.push(cardName);
    }
}

allCards.sort(function() {
    return Math.random() - 0.5
});

var doubleDeck = [];
for (let i = 0; i < 18 / 2; i++) {
    let fromAllCards = allCards[i];
    doubleDeck.push(fromAllCards, fromAllCards);
}
doubleDeck.sort(function() {
    return Math.random() - 0.5
});

var objCards = [];
for(let i = 0; i < doubleDeck.length; i++) {    
    objCards[i] = {
        name: doubleDeck[i],
        bgPath: "url('./image/cards/" + doubleDeck[i] + ".png')",
        dataName: '[data-name="' + doubleDeck[i] + '"]'
    }
 }

var tryGame = function() {
    $(".card").on("click", function(event){
        $(this).removeClass("back");
        $(this).attr("data-flipped","true");
        let clickedCards = $('.card').filter('[data-flipped="true"]');
        if (clickedCards.length == 2) {
            let firstClickedCardName = $(clickedCards[0]).attr("data-name");
            let secondClickedCardName = $(clickedCards[1]).attr("data-name");
            $(".card").off("click");
            if (firstClickedCardName == secondClickedCardName) {
                setTimeout(function(){ 
                    $(clickedCards[0]).addClass("empty-card").css("background-image","none").removeAttr("data-flipped").removeAttr("data-name");
                    $(clickedCards[1]).addClass("empty-card").css("background-image","none").removeAttr("data-flipped").removeAttr("data-name");
                    score = score + $(".card").filter(".back").length * 42;
                    $(".score").text(score);
                    
                    if($(".empty-card").length == doubleDeck.length) {
                        let xhr = new XMLHttpRequest();
                        xhr.open("GET", 'endgame.html', true);
                        xhr.send(null);
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                if(xhr.responseText) {
                                    $("body").html(xhr.responseText);
                                    setTimeout(function(){
                                        $(".score").text(score);
                                    }, 2);
                                }
                            }
                        }
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


var startGame = function(inGame) {
    if (inGame == true) {
        $(".card").addClass('back');
        tryGame();
    }
}

$(document).ready(function() {
    for (let i = 0; i < doubleDeck.length; i++) {
        $('.cards-container').append('<div class="card" data-name="' + objCards[i].name +'"></div');
        $(".card:last").css("background-image", objCards[i].bgPath);
    }
    setTimeout(startGame, 5000, true);
    
});