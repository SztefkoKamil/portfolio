import eventBus from '../misc/eventBus';

const views = ['Intro', 'About', 'Skills', 'Projects', 'Contact'];

let controlClick = false;
eventBus.$on('controlClick', () => (controlClick = true));

const nextRoute = function() {
  const current = this.currentRoute.name;
  const currentIndex = views.indexOf(current);
  let next = null;
  if (currentIndex === views.length - 1) next = '';
  else next = views[currentIndex + 1];
  this.push(`/${next.toLowerCase()}`);
};

const prevRoute = function() {
  const current = this.currentRoute.name;
  const currentIndex = views.indexOf(current);
  let prev = null;
  if (currentIndex === 1) prev = '';
  else if (currentIndex === 0) prev = views[views.length - 1];
  else prev = views[currentIndex - 1];
  this.push(`/${prev.toLowerCase()}`);
};

const beforeEachLogic = (to, from, next) => {
  // listeners: Conrols.vue
  eventBus.$emit('hideDown');
  makeTitle(to);
  if (!controlClick) setTransitionDirection(to, from);
  next();
  controlClick = false;
};

const makeTitle = (to) => {
  if (to.path === '/') document.title = 'Kamil Sztefko - Web Developer';
  else document.title = `${to.meta.title} - Kamil Sztefko`;
};

const setTransitionDirection = (to, from) => {
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
};

export default { beforeEachLogic, nextRoute, prevRoute };
