import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import GridView from '../components/GridView.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/grid', component: GridView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
