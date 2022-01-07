import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

import mangeRouter from "./mangeRouter/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/company",
    meta: {
      title: '首1页',
      icon: 'el-icon-house'
    },
    children: [{
      path: "/portal",
      name: "PersonalPortal",
      component: () => import("@/views/dashboard/index.vue"),
      meta: {
        title: '首1页',
        icon: 'el-icon-house'
      },
    }, {
      path: "/company",
      name: "Company",
      component: () => import("@/views/dashboard/index2.vue"), meta: {
        title: '首页',
        icon: 'el-icon-house'
      },
    }]
  }, {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"), meta: {
      title: '首112页',
      icon: 'el-icon-house'
    },
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"), meta: {
      title: '首1页',
      icon: 'el-icon-house'
    },
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404", meta: {
      title: '首2页',
      icon: 'el-icon-house'
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});


mangeRouter.map((item: any) => {
  router.addRoute(item);
});


router.beforeEach((to: any, from: any, next: any) => {
  if (!to.meta.title) {
    document.title = "oa-system";
  } else {
    document.title = `${to.meta.title}`;
  }
  const token = localStorage.getItem("token");
  if (!token && to.path !== "/login") {
    next("/login");
  } else {
    next();
  }
});

export default router;
