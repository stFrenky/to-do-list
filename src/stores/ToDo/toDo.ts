import { defineStore } from 'pinia';
import type { ToDoState } from './models';

export const useToDoStore = defineStore('toDo', {
  state: () => <ToDoState>({
    toDos: [
      {
        title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        dane: false,
        id: 1,
      },
      {
        title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        dane: false,
        id: 2,
      },
      {
        title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        dane: false,
        id: 3,
      },
      {
        title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        dane: false,
        id: 1,
      },
    ],
  }),
  actions: {

  },
});
