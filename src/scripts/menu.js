'user strict';

module.exports.activeClickListener = () => {
  const menuBtn = document.getElementById('menu-toggle-btn'),
        menuField = document.getElementById('menu-field');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu__toggle-btn--open');
    menuField.classList.toggle('nav__menu-field--open');
  });
}