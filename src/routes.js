import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import WorkPage from "./components/WorkPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/work", component: WorkPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
