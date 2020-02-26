import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import MainPage from "./views/MainPage.vue";
import ItemDetails from "./views/ItemDetails.vue";

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage
    },
    {
      path: "/ItemDetails",
      name: "ItemDetails",
      component: ItemDetails
    }
  ]
});
