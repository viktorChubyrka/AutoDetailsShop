import Vue from "vue";
import Router from "vue-router";
import Clients from "./views/Clients.vue";
import Appointments from "./views/Appointments.vue";
import Home from "./components/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "Home",
    //   component: Home
    // },
  ]
});
