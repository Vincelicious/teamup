import BadgeService from "@/services/BadgeService";

const state = {
  badges: []
};

const getters = {
  getBadgeById: state => id => {
    return state.badges.find(badge => badge.id == id);
  }
};

const mutations = {
  SET_BADGES(state, badges) {
    state.badges = badges;
  }
};

const actions = {
  fetchBadges({ commit }) {
    BadgeService.getRecordBadges()
      .then(response => {
        commit("SET_BADGES", response);
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
