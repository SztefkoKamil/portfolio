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
    component: About
  },
  {
    name: "Skills",
    path: "/skills",
    component: Skills
  },
  {
    name: "Projects",
    path: "/projects",
    component: Projects
  },
  {
    name: "Contact",
    path: "/contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
