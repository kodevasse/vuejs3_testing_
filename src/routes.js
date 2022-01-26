import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";
import CreateCustomer from "./views/CreateCustomer.vue";
import ListCustomer from "./views/ListCustomer.vue";
import ListUsers from "./views/ListUsers.vue";
import Tester from "./views/Tester.vue";
import Crypto from "./views/Crypto.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" } },
  {
    path: "/about",
    meta: { title: "About" },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  {
    path: "/about",
    meta: { title: "About" },
    component: About,
  },
  {
    path: "/create",
    meta: { title: "create" },
    component: CreateCustomer,
  },
  {
    path: "/crypto",
    meta: { title: "crypto" },
    component: Crypto,
  },
  {
    path: "/list",
    meta: { title: "List" },
    component: ListCustomer,
  },
  {
    path: "/users",
    meta: { title: "Users" },
    component: ListUsers,
  },
  {
    path: "/tester",
    meta: { title: "Tester" },
    component: Tester,
  },
  { path: "/:path(.*)", component: NotFound },
];
