import GroupService from "@/services/GroupService";

const state = {
  groups: [],
  group: {}
};

const getters = {
  getGroupById: state => id => {
    return state.groups.find(group => group.id == id);
  },
  getGroupByMemberId: state => id => {
    return state.groups.find(group => group.members.includes(id));
  },
  getRandomGroup: state => {
    return state.groups[Math.floor(Math.random() * state.groups.length)];
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
        commit("SET_GROUPS", response);
      })
      .catch(error => {
        console.error(error);
      });
  },
  fetchGroup({ commit }, id) {
    return GroupService.getGroup(id)
      .then(response => {
        commit("SET_GROUP", response);
        return response;
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
