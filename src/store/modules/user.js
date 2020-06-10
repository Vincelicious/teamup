import UserService from "@/services/UserService";

const state = {
  user: {},
  users: []
};

const getters = {
  getUserById: state => id => {
    return state.users.find(user => user.id == id);
  },
  getRandomUser: state => {
    return state.users[Math.floor(Math.random() * state.users.length)];
  }
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_USER(state, user) {
    state.user = user;
  }
};

const actions = {
  fetchUsers({ commit }) {
    UserService.getUsers()
      .then(response => {
        commit("SET_USERS", response);
      })
      .catch(error => {
        console.error(error);
      });
  },
  setRandomUser({ commit, getters }) {
    commit("SET_USER", getters.getRandomUser);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
