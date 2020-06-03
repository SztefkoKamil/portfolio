import eventBus from '../misc/eventBus';

const views = ['Intro', 'About', 'Skills', 'Projects', 'Contact'];

let controlClick = false;
eventBus.$on('controlClick', () => (controlClick = true));

function nextRoute() {
  const current = this.currentRoute.name;
  const currentIndex = views.indexOf(current);
  let next = null;
  if (currentIndex === views.length - 1) next = '';
  else next = views[currentIndex + 1];
  this.push(`/${next.toLowerCase()}`);
}

function prevRoute() {
  const current = this.currentRoute.name;
  const currentIndex = views.indexOf(current);
  let prev = null;
  if (currentIndex === 1) prev = '';
  else if (currentIndex === 0) prev = views[views.length - 1];
  else prev = views[currentIndex - 1];
  this.push(`/${prev.toLowerCase()}`);
}

function beforeEachLogic(to, from, next) {
  // listeners: Conrols.vue
  eventBus.$emit('hideDown');
  document.title = makeTitle(to);
  console.log(document.title);

  if (!controlClick) setTransitionDirection(to, from);
  next();
  controlClick = false;
}

function makeTitle(to) {
  if (to.path === '/') return 'Kamil Sztefko - Web Developer';
  else return `${to.meta.title} - Kamil Sztefko`;
}

function setTransitionDirection(to, from) {
  const routes = views.length - 1;
  const fromIndex = views.indexOf(from.name);
  const toIndex = views.indexOf(to.name);
  if (fromIndex === routes || toIndex < fromIndex) {
    // listeners: App.vue
    eventBus.$emit('prevRoute');
  } else if (fromIndex === 0 || toIndex > fromIndex) {
    // listeners: App.vue
    eventBus.$emit('nextRoute');
  }
}

export default {
  beforeEachLogic,
  nextRoute,
  prevRoute,
  makeTitle,
  setTransitionDirection
};
