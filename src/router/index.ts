import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Section from "../views/Section.vue";
import Translate from "../views/Translate.vue";
import History from "../views/History.vue";
import Meta from "../views/Meta/index.vue";
import Registration from "../views/Registration/index.vue";
import Relations from "../views/Relations.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "bg-primary-light border-r-3 border-primary-dark",
  linkExactActiveClass: "text-customColor-dark",
  routes: [
    {
      path: "/",
      component: () => Home,
    },
    {
      path: "/section",
      component: () => Section,
    },
    {
      path: "/translate",
      component: () => Translate,
    },
    {
      path: "/history",
      component: () => History,
    },
    {
      path: "/meta",
      component: () => Meta,
    },
    {
      path: "/registration",
      component: () => Registration,
    },
    {
      path: "/relations",
      component: () => Relations,
    },
  ],
});
export default router;
