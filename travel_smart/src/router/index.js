import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Brazil from '../views/Brazil.vue';
import Kenya from '../views/Kenya.vue';
import Hawaii from '../views/Hawaii.vue';
import Panama from '../views/Panama.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: Brazil
  },
  {
    path: '/kenya',
    name: 'kenya',
    component: Kenya
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: Hawaii
  },
  {
    path: '/panama',
    name: 'panama',
    component: Panama
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
