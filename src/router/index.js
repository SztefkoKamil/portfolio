import Vue from 'vue';
import VueRouter from 'vue-router';

import Intro from '../views/Intro';
import About from '../views/About';
import Skills from '../views/Skills';
import Projects from '../views/Projects';
import Contact from '../views/Contact';
import logic from './logic';

Vue.use(VueRouter);

const routes = [
  {
    name: 'Intro',
    path: '/',
    component: Intro
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    meta: { title: 'About Me' }
  },
  {
    name: 'Skills',
    path: '/skills',
    component: Skills,
    meta: { title: 'My skills' }
  },
  {
    name: 'Projects',
    path: '/projects',
    component: Projects,
    meta: { title: 'My projects' }
  },
  {
    name: 'Contact',
    path: '/contact',
    component: Contact,
    meta: { title: 'Contact' }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(logic.beforeEachLogic);
router.nextRoute = logic.nextRoute;
router.prevRoute = logic.prevRoute;

export default router;
