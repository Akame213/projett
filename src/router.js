import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import WorkPage from "./components/WorkPage.vue";
import AboutPage from "./components/AboutPage.vue";
import CVPage from "./components/work/cvPage.vue"; // Assurez-vous que le chemin et le nom du fichier sont corrects
import CahierPage from "./components/work/cahierPage.vue";
import CommentPage from "./components/work/commentairePage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/work", component: WorkPage },
  { path: "/about", component: AboutPage },
  { path: "/work/cv", component: CVPage },
  { path: "/work/cahier", component: CahierPage },
  { path: "/work/comment", component: CommentPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
