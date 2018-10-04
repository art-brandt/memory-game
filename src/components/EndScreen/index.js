import DOMScreen from './index.html';
import GameScreen from '../GameScreen';

import './style.less';

export default function EndScreen () {
  const app = document.querySelector('#App');
  app.innerHTML = DOMScreen;
  const btn = document.querySelector('.btn');
  btn.onclick = GameScreen
}