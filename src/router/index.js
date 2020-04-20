import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GroupOverview from '../views/GroupOverview.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/groupoverview",
    name: "group-overview",
    component: GroupOverview
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
