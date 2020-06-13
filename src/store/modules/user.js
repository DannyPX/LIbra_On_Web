import axios from "axios";

const apiLinks = {
  userAPI: "https://localhost:5001/api/user"
};

const state = {
  users: {}
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users.data;
  }
};

const actions = {
  getUsers: ({ commit }) => {
    return axios.get(apiLinks.userAPI).then(response => {
      if (response.status == 200) {
        commit("SET_USERS", response.data);
      }
    });
  }
};

const getters = {
  user: state => {
    return state.users;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
