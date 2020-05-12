import UserService from "@/services/UserService";

const state = {
  users: []
};

const getters = {};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  }
};

const actions = {
  fetchUsers({ commit }) {
    UserService.getUsers()
      .then(response => {
        commit("SET_USERS", response.data);
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
