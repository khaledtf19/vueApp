import { createMemoryHistory, createRouter, RouteRecordRaw } from "vue-router";

import HomePage from "./pages/Home.vue";
import LoginPage from "./pages/Login.vue";
import RegisterPage from "./pages/Register.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: HomePage, name: "Home" },
  { path: "/login", component: LoginPage, name: "Login" },
  { path: "/register", component: RegisterPage },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
