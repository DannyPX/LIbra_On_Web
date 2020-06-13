const apiLinks = {
  bookAPI: "https://localhost:5001/api/book"
};

import axios from "axios";

const state = {
  books: {},
  myBooks: {},
  bookInfo: {
    id: "",
    title: "",
    genre: "",
    story: ""
  },
  bookCred: {
    title: "",
    genre: "",
    story: ""
  }
};

const mutations = {
  UPDATE_TITLE(state, title) {
    state.bookCred.title = title;
  },
  UPDATE_GENRE(state, genre) {
    state.bookCred.genre = genre;
  },
  UPDATE_STORY(state, story) {
    state.bookCred.story = story;
  },
  SET_BOOK(state, book) {
    (state.bookInfo.id = book.id),
      (state.bookInfo.genre = book.genre),
      (state.bookInfo.story = book.story),
      (state.bookInfo.title = book.title);
  },
  DELETE_BOOK(state) {
    (state.bookInfo.id = ""),
      (state.bookInfo.genre = ""),
      (state.bookInfo.story = ""),
      (state.bookInfo.title = "");
  },
  DELETE_BOOKCRED(state) {
    (state.bookCred.genre = ""),
      (state.bookCred.story = ""),
      (state.bookCred.title = "");
  },
  SET_BOOKS(state, books) {
    state.books = books;
  }
};

const actions = {
  createBook: ({ state, commit, rootGetters }) => {
    let data = JSON.stringify({
      userid: rootGetters.account.id,
      title: state.bookCred.title,
      genre: state.bookCred.genre,
      story: state.bookCred.story
    });
    return axios
      .post(apiLinks.bookAPI, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${rootGetters.token}`
        }
      })
      .then(response => {
        if (response.status == 200) {
          commit("SET_BOOK", response.data);
        }
      });
  },
  updateBook: ({ state, commit, rootGetters }) => {
    let data = JSON.stringify({
      id: state.bookInfo.id,
      title: state.bookCred.title,
      genre: state.bookCred.genre,
      story: state.bookCred.story
    });
    return axios
      .put(apiLinks.bookAPI, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${rootGetters.token}`
        }
      })
      .then(response => {
        if (response.status == 200) {
          commit("SET_BOOK", response.data);
        }
      });
  },
  deleteBook: ({ state, commit, rootGetters }) => {
    return axios
      .delete(apiLinks.bookAPI + "/" + state.bookInfo.id, {
        headers: {
          Authorization: `Bearer ${rootGetters.token}`
        }
      })
      .then(response => {
        if (response.status == 200) {
          commit("DELETE_BOOK");
        }
      });
  },
  getAllbooks: ({ commit }) => {
    return axios.get(apiLinks.bookAPI).then(response => {
      if (response.status == 200) {
        commit("SET_BOOKS", response.data);
      }
    });
  },
  emptyBookCred: ({ commit }) => {
    commit("DELETE_BOOKCRED")
  }
};

const getters = {
  books: state => {
    return state.books;
  },
  bookInfo: state => {
    return state.bookInfo;
  },
  bookCred: state => {
    return state.bookCred;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
