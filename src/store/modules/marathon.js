import MarathonService from "@/services/MarathonService";

const state = {
  marathons: []
};

const getters = {
  getMarathonById: state => id => {
    return state.marathons.find(marathon => marathon.id == id);
  }
};

const mutations = {
  SET_MARATHONS(state, marathons) {
    state.marathons = marathons;
  }
};

const actions = {
  fetchMarathons({ commit }) {
    MarathonService.getMarathons()
      .then(response => {
        commit("SET_MARATHONS", response);
      })
      .catch(error => {
        console.error(error);
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
