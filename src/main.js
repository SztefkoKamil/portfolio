'user strict';

import './sass/style.scss';
import './assets/Kamil-Sztefko-CV.pdf';

import { activeClickListener } from './scripts/menu';
import { setScreenSize, getScreenSize } from './scripts/screenSize';

window.addEventListener('DOMContentLoaded', () => {
  setScreenSize();
  activeClickListener();
});

window.addEventListener('load', () => {

  console.log('Page loaded');


});

