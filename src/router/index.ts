import { createRouter, createWebHistory } from 'vue-router';
import { TToDoListPage } from '@/pages/ToDoList';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ToDoList',
      component: TToDoListPage,
    },
  ],
});

export default router;
