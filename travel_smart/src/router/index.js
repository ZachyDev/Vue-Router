import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
Vue.use(VueRouter);

const routes = [
  // route home
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // router brazil
  {
    path: "/brazil",
    name: "brazil",
    component: () => import(/*webpackChunkName: "Brazil" */ '../views/Brazil')
  },
   // router kenya
   {
    path: "/kenya",
    name: "kenya",
    component: () => import(/*webpackChunkName: "Kenya" */ '../views/Kenya')
  },
   // router hawaii
   {
    path: "/hawaii",
    name: "hawaii",
    component: () => import(/*webpackChunkName: "Hawaii" */ '../views/Hawaii')
  },
   // router panama
   {
    path: "/panama",
    name: "panama",
    component: () => import(/*webpackChunkName: "Panama" */ '../views/Panama')
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
