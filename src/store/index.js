import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import menu from "./modules/menu";
import auth from "./modules/auth";
import user from "./modules/user";
import book from "./modules/book";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    menu,
    auth,
    user,
    book
  }
});
