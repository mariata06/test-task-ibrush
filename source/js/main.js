import {initModals} from './modules/modals/init-modals';
import {initPostSlider} from './modules/post-slider';
import {initCustomSelect} from './modules/select-books.js';
import {initNav} from './modules/init-nav.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    initModals();
    initPostSlider();
    initCustomSelect();
    initNav();
  });
});
