'user strict';

import './sass/style.scss';
import smoothscroll from 'smoothscroll-polyfill';
import { activeScreenPositionDetector } from './scripts/screenPosition';
import { activeClickListeners } from './scripts/menu';

window.addEventListener('DOMContentLoaded', () => {
  activeScreenPositionDetector();
  activeClickListeners();
  smoothscroll.polyfill();
});