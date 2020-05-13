import Vue from "vue";
import Vuex from "vuex";

import group from "@/store/modules/group";
import user from "@/store/modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    group,
    user
  }
});
