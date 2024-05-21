import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import WorkPage from "./components/WorkPage.vue";
import AboutPage from "./components/AboutPage.vue";
import CVPage from "./components/work/cvPage.vue";
import CahierPage from "./components/work/cahierPage.vue";
import CommentPage from "./components/work/commentairePage.vue";
import NotFoundPage from "./components/NotFoundPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/work", component: WorkPage },
  { path: "/about", component: AboutPage },
  { path: "/work/cv", component: CVPage },
  { path: "/work/cahier", component: CahierPage },
  { path: "/work/comment", component: CommentPage },
  { path: "/:catchAll(.*)", component: NotFoundPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
