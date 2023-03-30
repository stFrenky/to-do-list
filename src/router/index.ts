import { createRouter, createWebHistory } from 'vue-router';
// @ts-ignore
import { TToDoListPages } from '@/pages/ToDoList';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ToDoList',
      component: TToDoListPages,
    },
  ],
});

export default router;
