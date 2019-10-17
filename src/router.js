import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Dishes from "./views/dishes.vue";
import Order from "./views/order.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dishes",
      name: "dishes",
      component:Dishes
    },
    {
      path: "/order",
      name: "order",
      component: Order
    }
  ]
});
