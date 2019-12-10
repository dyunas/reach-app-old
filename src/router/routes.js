const routes = [
  {
    path: "/",
    component: () => import("layouts/Login/LoginLayout.vue"),
    children: [
      { path: "", component: () => import("pages/LoginPage/Index.vue") }
    ],
    meta: { requiresVisitor: true }
  },
  {
    path: "/dashboard",
    component: () => import("layouts/Master/MasterLayout.vue"),
    children: [
      { path: "", component: () => import("pages/DashboardPage/Index.vue") }
    ],
    meta: { requiresAuth: true }
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
