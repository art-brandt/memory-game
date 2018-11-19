import './main.less';

import DOMScreen from './index.html';
import GameScreen from '../GameScreen/';

export default function StartScreen () {
  const app = document.querySelector('#App');
  app.innerHTML = DOMScreen;
  const btn = document.querySelector('.btn');
  btn.onclick = GameScreen;
} 