import Vue from "vue";
import Vuex from "vuex";

import { vuexfireMutations } from "vuexfire";

import group from "@/store/modules/group";
import user from "@/store/modules/user";
import marathon from "@/store/modules/marathon";
import badge from "@/store/modules/badge";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    ...vuexfireMutations
  },
  actions: {},
  modules: {
    group,
    user,
    marathon,
    badge
  }
});
