import './less/style.less';
import './image/rubs.gif';

function Card(name) {

  const imageBack = document.createElement('img');
  imageBack.src = './image/rubs.gif';
  imageBack.className = 'back-face';

  const imageFront = document.createElement('img');
  imageFront.src = `./image/${name}.png`;
  imageFront.className = 'front-face';

  const card = document.createElement('div');
  card.className = 'card';
  card.classList.add('flip');
  card.dataset.name = name;
  card.dataset.tid = 'Card-flipped';

  card.appendChild(imageFront);
  card.appendChild(imageBack);

  return card;
}

export default Card;