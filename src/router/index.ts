// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '../views/Home.vue';
import Projects from '../views/Projects.vue';
import About from '../views/About.vue';
import SingleProject from '../views/SingleProject.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
  { path: '/projects/:slug', component: SingleProject},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
