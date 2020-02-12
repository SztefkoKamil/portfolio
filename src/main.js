'user strict';

import './sass/style.scss';

import { activeScreenPositionDetector } from './scripts/screenPosition';
import { activeMenuListeners } from './scripts/menuListeners';

window.addEventListener('DOMContentLoaded', () => {
  activeScreenPositionDetector();
  activeMenuListeners();
});