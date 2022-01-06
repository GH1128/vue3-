import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

// import mangeRouter from "./mangeRouter/index";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/company",
    children: [{
      path: "/portal",
      name: "PersonalPortal",
      component: () => import("@/views/dashboard/index.vue"),
    }, {
      path: "/company",
      name: "Company",
      component: () => import("@/views/dashboard/index2.vue"),
    }

      // company
    ]
  }, {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
  }, {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
  }, {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  }
];

const router = createRouter({
  history: createWebHistory(),
  // routes: [...mangeRouter, ...routes]
  routes: routes,
});

// mangeRouter.map((item) => {
//   router.addRoute(item);
// });

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
