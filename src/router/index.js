import Vue from "vue";
import VueRouter from "vue-router";

import Intro from "../views/Intro";
import About from "../views/About";
import Skills from "../views/Skills";
import Projects from "../views/Projects";
import Contact from "../views/Contact";

Vue.use(VueRouter);

const routes = [
  {
    name: "Intro",
    path: "/",
    component: Intro
  },
  {
    name: "About",
    path: "/about",
    component: About,
    meta: { title: "About Me" }
  },
  {
    name: "Skills",
    path: "/skills",
    component: Skills,
    meta: { title: "My skills" }
  },
  {
    name: "Projects",
    path: "/projects",
    component: Projects,
    meta: { title: "My projects" }
  },
  {
    name: "Contact",
    path: "/contact",
    component: Contact,
    meta: { title: "Contact" }
  }
];

const makeTitle = (to, from, next) => {
  if (to.path === "/") document.title = "Kamil Sztefko - Web Developer";
  else document.title = `${to.meta.title} - Kamil Sztefko`;
  next();
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(makeTitle);

export default router;
