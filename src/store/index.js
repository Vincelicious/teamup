import Vue from "vue";
import Vuex from "vuex";

import { vuexfireMutations } from "vuexfire";

import group from "@/store/modules/group";
import user from "@/store/modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    ...vuexfireMutations
  },
  actions: {},
  modules: {
    group,
    user
  }
});
