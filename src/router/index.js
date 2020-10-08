import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AmongUs from "../views/AmongUs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/amoung-us",
    name: "Among Us",
    component: AmongUs
  }
];

const router = new VueRouter({
  routes
});

export default router;
