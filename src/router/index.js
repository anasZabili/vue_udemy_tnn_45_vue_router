import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import Jobs from "../views/jobs/Jobs.vue";
import JobDetails from "../views/jobs/JobDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // exemple lazy loading ça sert surtout en prodution pour eviter de
  // chargert tout les composant on met cela en place principalement pour des raison de performance
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/jobs",
    name: "Jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    // specifie que les route paramter son injecté dans les props
    // du component
    props: true,
  },
  // redirect quand le user tape le liens all-jobs
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  // catch all route 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
