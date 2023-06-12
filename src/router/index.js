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
    redirect: "/buy",
    component: () => import("../views/MainView.vue"),
    children: [
      {
        path: "/buy",
        name: "buy",
        component: () => import("../components/client/BuyView.vue"),
      },
    ],
  },
  {
    path: "/manager",
    name: "manager",
    redirect: "/commodity",
    component: () => import("../views/ManagerView.vue"),
    children: [
      {
        path: "/commodity",
        name: "commodity",
        component: () => import("../components/manager/CommodityView.vue"),
      },
      {
        path: "/brand",
        name: "brand",
        component: ()=>import("../components/manager/BrandView.vue"),
      },
      {
        path: "/supplier",
        name: "supplier",
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
