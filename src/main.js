'user strict';

import './sass/style.scss';
import { activeClickListeners } from './scripts/menu';

window.addEventListener('DOMContentLoaded', () => {
  activeClickListeners();
});