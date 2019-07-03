import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Brazil from "./views/Brazil.vue";
import Hawaii from "./views/Brazil.vue";
import Panama from "./views/Brazil.vue";
import Jamaica from "./views/Brazil.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/brazil",
      name: "brazil",
      component: Brazil
    },
    {
      path: "/hawaii",
      name: "hawaii",
      component: Hawaii
    },
    {
      path: "/panama",
      name: "panama",
      component: Panama
    },
    {
      path: "/jamaica",
      name: "jamaica",
      component: Jamaica
    }
  ]
});
