import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/brazil",
    name: "brazil",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "brazil" */ '../views/Brazil')
  },
  {
    path: '/kenya',
    name: 'kenya',
    component: () => import(/* webpackChunkName: "kenya" */ '../views/Kenya')
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: () => import(/* webpackChunkName: "hawaii" */ '../views/Hawaii')
  },
  {
    path: '/panama',
    name: 'panama',
    component: () => import(/* webpackChunkName: "panama" */ '../views/Panama')
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
