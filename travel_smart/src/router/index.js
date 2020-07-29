import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
// connect vue and vue-router
Vue.use(VueRouter);

// routes array
const routes = [
  // Home route
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    // Brazil route
    {
      path: '/brazil',
      name: 'Brazil',
      component: () => import(/*webpackChunkName: "Brazil"*/ '../views/Brazil')
    },
     // Kenya route
     {
      path: '/kenya',
      name: 'Kenya',
      component: () => import(/*webpackChunkName: "Kenya"*/ '../views/Kenya')
    },
     // Hawaii route
     {
      path: '/hawaii',
      name: 'Hawaii',
      component: () => import(/*webpackChunkName: "Hawaii"*/ '../views/Hawaii')
    },
     // Panama route
     {
      path: '/panama',
      name: 'Panama',
      component: () => import(/*webpackChunkName: "Panama"*/ '../views/Panama')
    },
    // Destination Details route
    {
      path: '/details/:id',
      name: 'DestinationDetails',
      component: () => import(/*webpackChunkName: "Details"*/ '../views/Destinations')
    }
];

// create a vue-router instance
const router = new VueRouter({
  linkExactActiveClass: "travel-smart-active-class",
  mode: 'history',
  routes
});
export default router;
