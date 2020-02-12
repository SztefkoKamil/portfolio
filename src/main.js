'user strict';

import './sass/style.scss';
import smoothscroll from 'smoothscroll-polyfill';
import { activeClickListeners } from './scripts/menu';

window.addEventListener('DOMContentLoaded', () => {
  activeClickListeners();
  smoothscroll.polyfill();
});