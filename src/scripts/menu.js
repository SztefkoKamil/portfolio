'user strict';

const menuBtn = document.getElementById('menu-toggle-btn'),
      menuField = document.getElementById('menu-field'),
      nav = document.getElementById('nav'),
      navAnchors = Array.from(document.querySelectorAll('.navAnchor')),
      pageBody = document.querySelector('body');
let screenWidth = window.innerWidth;

window.addEventListener('resize', () => screenWidth = window.innerWidth);

function toggleMobileMenu(e) {
  e.stopPropagation();
  menuBtn.classList.toggle('menu__toggle-btn--open');
  menuField.classList.toggle('nav__mobile-menu--open');
};

function toggleMenuActiveAnchor(e) {
  e.preventDefault();
  const href = e.target.hash;
  const targetOffsetTop = document.querySelector(href).offsetTop;
  window.scrollTo({
    top: targetOffsetTop,
    left: 0,
    behavior: 'smooth'
  });

  navAnchors.forEach(a => a.classList.remove('active'));
  e.target.classList.add('active');
  if(screenWidth < 768) toggleMobileMenu(e);
};

const activeClickListeners = () => {
  menuBtn.addEventListener('click', toggleMobileMenu);
  nav.addEventListener('click', toggleMenuActiveAnchor);
};

export { activeClickListeners };