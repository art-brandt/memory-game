
  function unflipAllCards(cards){
    for (let card of cards) {
        card.classList.add('back');
        card.removeAttribute('data-tid');
    }
  }

  function removeCardFromDeck(flippedCard){
    let equalCards =
    document.querySelectorAll(`[data-name="${flippedCard[1].dataset.name}"]`);
    for(let eq of equalCards) {
        eq.removeAttribute('data-tid');
        eq.removeAttribute('data-name');
        eq.classList.remove('back');
        eq.classList.add('empty-card');
        eq.removeAttribute('style');
    }
  }

  function flipOneCard(card){
    card.classList.remove('back');
    card.setAttribute('data-tid','Card-flipped');
  }

export {unflipAllCards, removeCardFromDeck, flipOneCard};


