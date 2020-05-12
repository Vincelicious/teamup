import GroupService from "@services/GroupService";

const state = {
  groups: [],
  group: {}
};

const getters = {
  getGroupById: state => id => {
    return state.groups.find(group => group.id == id);
  }
};

const mutations = {
  SET_GROUPS(state, groups) {
    state.groups = groups;
  },
  SET_GROUP(state, group) {
    state.group = group;
  }
};

const actions = {
  fetchGroups({ commit }) {
    GroupService.getGroups()
      .then(response => {
        commit("SET_GROUPS", response.data);
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
