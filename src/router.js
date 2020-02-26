import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from "./views/Home.vue";
import MainPage from "./views/MainPage.vue";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: MainPage
    },
    {
      path: "/ItemDetails",
      name: "ItemDetails",
      component: ItemDetails
    }
  ]
});
