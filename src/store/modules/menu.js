// const apiLinks = {
// }

const menuType = {
  noAuth: [
    {
      header: true,
      title: "Account",
      hiddenOnCollapse: true
    },
    {
      href: "/account/login",
      title: "Login",
      icon: "fa fa-user"
    },
    {
      href: "/account/register",
      title: "Register",
      icon: "fa fa-user"
    },
    {
      header: true,
      title: "Navigation",
      hiddenOnCollapse: true
    },
    {
      href: "/",
      title: "Home",
      icon: "fa fa-home"
    }
  ],
  withAuth: [
    {
      header: true,
      title: "My account",
      hiddenOnCollapse: true
    },
    {
      title: "Profile",
      icon: "fa fa-user",
      child: [
        {
          href: "/account",
          title: "View my profile",
          icon: "fa fa-user"
        },
        {
          href: "/account/edit",
          title: "Edit profile",
          icon: "fas fa-user-edit"
        },
        {
          href: "/account/logout",
          title: "Logout",
          icon: "fas fa-sign-out-alt"
        }
      ]
    },
    {
      title: "Books",
      icon: "fa fa-book",
      child: [
        {
          href: "/account/books",
          title: "My books",
          icon: "fas fa-th-list"
        },
        {
          href: "/book/create",
          title: "Create Book",
          icon: "fas fa-feather-alt"
        }
      ]
    },
    {
      header: true,
      title: "Navigation",
      hiddenOnCollapse: true
    },
    {
      href: "/",
      title: "Home",
      icon: "fa fa-home"
    }
  ]
};

const state = {
  menu: [
    {
      header: true,
      title: "Account",
      hiddenOnCollapse: true
    },
    {
      href: "/account/login",
      title: "Login",
      icon: "fa fa-user"
    },
    {
      href: "/account/register",
      title: "Register",
      icon: "fa fa-user"
    },
    {
      header: true,
      title: "Navigation",
      hiddenOnCollapse: true
    },
    {
      href: "/",
      title: "Home",
      icon: "fa fa-home"
    }
  ],
  collapsed: false
};

const mutations = {
  SET_COLLAPSED(state, bool) {
    state.collapsed = bool;
  },
  SET_MENU(state, menu) {
    state.menu = menu;
  }
};

const actions = {
  setCollapsed: ({ commit }, bool) => {
    commit("SET_COLLAPSED", bool);
  },
  setWithAuth: ({ commit }) => {
    commit("SET_MENU", menuType.withAuth);
  },
  setNoAuth: ({ commit }) => {
    commit("SET_MENU", menuType.noAuth);
  }
};

const getters = {
  menu: state => {
    return state.menu;
  },
  collapsed: state => {
    return state.collapsed;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
