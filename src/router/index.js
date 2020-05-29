import Vue from "vue";
import VueRouter from "vue-router";
// import store from "../store";
import Home from "../views/Home.vue";
import MerchantAnalytics from "../views/MerchantAnalytics.vue";
import store from "../store";


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
      import("../views/AdminAnalytics.vue"),
    meta: {requiresAuth: true}
  },
  {
    path: "/merchant/analytics",
    name: "MerchantAnalytics",
    component: MerchantAnalytics,
    meta: {requiresAuth: true}

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
      import("../views/MerchantBank.vue"),
    meta: {requiresAuth: true}
  },
  {
    path: "/merchant/withdrawal",
    name: "MerchantWithdrawal",
    component: () =>
      import("../views/MerchantWithdrawal.vue")
  },
  {
    path: "/merchant/supervisor",
    name: "MerchantSupevisor",
    component: () =>
      import("../views/MerchantSupervisor.vue"),
    meta: {requiresAuth: true}
  },
  {
    path: "/merchant/profile",
    name: "MerchantProfile",
    component: () =>
      import("../views/MerchantProfile.vue"),
    meta: {requiresAuth: true}

  },
  {
    path: "/admin/projects",
    name: "AdminProjects",
    component: () =>
      import("../views/AdminProjects.vue"),
    meta: {requiresAuth: true}

  },
  {
    path: "/admin/merchants",
    name: "AdminMerchants",
    component: () =>
      import("../views/AdminMerchants.vue"),
    meta: {requiresAuth: true}
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.authToken === null) {
      next({
        name: "Auth"
      });
    } else {
      next()
    }
  } else{
    next();
  }
  
});

export default router;
