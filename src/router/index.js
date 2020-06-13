import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/account/login",
    name: "Login",
    component: () => import("../views/user/Login.vue")
  },
  {
    path: "/account/logout",
    name: "Logout",
    component: () => import("../views/user/Logout.vue")
  },
  {
    path: "/account",
    name: "Profile",
    component: () => import("../views/user/Profile.vue")
  },
  {
    path: "/account/register",
    name: "Register",
    component: () => import("../views/user/Register.vue")
  },
  {
    path: "/account/edit",
    name: "Edit",
    component: () => import("../views/user/Edit.vue")
  },
  {
    path: "/book/create",
    name: "BookCreate",
    component: () => import("../views/book/Create.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
