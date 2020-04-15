import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GroupList from "../views/GroupList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/group-list",
    name: "Group List",
    component: GroupList
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
