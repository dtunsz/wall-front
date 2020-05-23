import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MerchantAnalytics from "../views/MerchantAnalytics.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/admin/analytics",
    name: "AdminAnalytics",
    component: () =>
      import("../views/AdminAnalytics.vue")
  },
  {
    path: "/merchant/analytics",
    name: "MerchantAnalytics",
    component: MerchantAnalytics
  },
  {
    path: "/auth",
    name: "Auth",
    component: () =>
      import("../views/Auth.vue")
  },
  {
    path: "/merchant/bank",
    name: "MerchantBank",
    component: () =>
      import("../views/MerchantBank.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
