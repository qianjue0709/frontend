import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/main",
    name: "main",
    component: ()=>import("../views/MainView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
