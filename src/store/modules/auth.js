const apiLinks = {
  userAPI: "https://localhost:5001/api/user"
};

import axios from "axios";

const state = {
  token: "",
  credentials: {
    name: "",
    email: "",
    password: "",
    bio: ""
  },
  account: {
    id: "",
    name: "",
    email: "",
    bio: ""
  },
  authVal: ""
};

const mutations = {
  UPDATE_EMAIL(state, email) {
    state.credentials.email = email;
  },
  UPDATE_PASSWORD(state, password) {
    state.credentials.password = password;
  },
  UPDATE_NAME(state, name) {
    state.credentials.name = name;
  },
  UPDATE_BIO(state, bio) {
    state.credentials.bio = bio;
  },
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_AUTHVAL(state, status) {
    state.authVal = status;
  },
  SET_ACCOUNT(state, account) {
    (state.account.id = account.id),
      (state.account.name = account.name),
      (state.account.email = account.email),
      (state.account.bio = account.bio),
      (state.credentials.name = account.name),
      (state.credentials.bio = account.bio);
  },
  EMPTY_CREDENTIALS(state) {
    state.credentials = {
      name: "",
      email: "",
      password: "",
      bio: ""
    };
  }
};

const actions = {
  loginAccount: ({ state, commit }) => {
    let data = JSON.stringify({
      email: state.credentials.email,
      password: state.credentials.password
    });
    return axios
      .post(apiLinks.userAPI + "/authenticate", data, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        if (response.status == 200) {
          commit("SET_TOKEN", response.data);
          commit("SET_AUTHVAL", true);
        } else {
          commit("SET_AUTHVAL", false);
        }
      });
  },
  createAccount: ({ commit, state }) => {
    let data = JSON.stringify({
      name: state.credentials.name,
      email: state.credentials.email,
      password: state.credentials.password,
      bio: state.credentials.bio
    });
    return axios
      .post(apiLinks.userAPI, data, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => {
        if (response.status == 200) {
          commit("SET_AUTHVAL", true);
        } else {
          commit("SET_AUTHVAL", false);
        }
      });
  },
  updateAccount: ({ state, commit }) => {
    let data = JSON.stringify({
      name: state.credentials.name,
      email: state.credentials.email,
      password: state.credentials.password,
      bio: state.credentials.bio
    });
    return axios
      .put(apiLinks.userAPI, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`
        }
      })
      .then(response => {
        if (response.status == 200) {
          commit("SET_ACCOUNT", response);
          commit("SET_AUTHVAL", true);
        } else {
          commit("SET_AUTHVAL", false);
        }
      });
  },
  deleteAccount: ({ state, commit }) => {
    return axios
      .delete(apiLinks.userAPI, {
        headers: {
          Authorization: `Bearer ${state.token}`
        }
      })
      .then(response => {
        if (response.status == 200) {
          commit("SET_TOKEN", "");
        }
      });
  },
  logoutAccount: ({ commit }) => {
    commit("SET_TOKEN", "");
  },
  emptyCredentials: ({ commit }) => {
    commit("EMPTY_CREDENTIALS");
  },
  getAccount: ({ commit }) => {
    let data = "";
    return axios
      .post(apiLinks.userAPI + "/token", data, {
        headers: {
          Authorization: `Bearer ${state.token}`
        }
      })
      .then(response => {
        if (response.status == 200) {
          commit("SET_ACCOUNT", response.data);
        }
      });
  }
};

const getters = {
  credentials: state => {
    return state.credentials;
  },
  account: state => {
    return state.account;
  },
  token: state => {
    return state.token;
  },
  authVal: state => {
    return state.authVal;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
