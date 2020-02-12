'use strict';

import debounce from 'lodash.debounce';

const aboutSection = document.getElementById('about'),
      skillsSection = document.getElementById('skills'),
      projectsSection = document.getElementById('projects'),
      contactSection = document.getElementById('contact'),
      navAnchors = Array.from(document.querySelectorAll('.navAnchor'));
let aboutYOffset = aboutSection.offsetTop,
    skillsYOffset = skillsSection.offsetTop,
    projectsYOffset = projectsSection.offsetTop,
    contactYOffset = contactSection.offsetTop;

function setNewOffsetTop() {
  aboutYOffset = aboutSection.offsetTop;
  skillsYOffset = skillsSection.offsetTop;
  projectsYOffset = projectsSection.offsetTop;
  contactYOffset = contactSection.offsetTop;
};

function clearAnchorsActive() {
  navAnchors.forEach(a => a.classList.remove('active'));
};

function addActiveClass(href) {
  const target = Array.from(document.querySelectorAll(`[href="${href}"]`));
  if(!target[0].classList.contains('active') && !target[1].classList.contains('active')) {
    clearAnchorsActive()
    target[0].classList.add('active');
    target[1].classList.add('active');
  }
};

function checkYOffset() {
  const offsetRange = 200;
  if(pageYOffset > contactYOffset-offsetRange) {
    addActiveClass('#contact');
  } else if(pageYOffset > projectsYOffset-offsetRange) {
    addActiveClass('#projects');
  } else if(pageYOffset > skillsYOffset-offsetRange) {
    addActiveClass('#skills');
  } else if(pageYOffset > aboutYOffset-offsetRange) {
    addActiveClass('#about');
  } else {
    clearAnchorsActive();
  };
};

const activeScreenPositionDetector = function() {
  window.addEventListener('resize', setNewOffsetTop);
  window.addEventListener('scroll', debounce(checkYOffset, 200));
};

export { activeScreenPositionDetector };