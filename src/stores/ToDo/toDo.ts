import { defineStore } from 'pinia';
import type { ToDoState } from './models';

export const useToDoStore = defineStore('toDo', {
  state: () => <ToDoState>({
    toDos: [],
  }),
  getters: {
    lastToDoId(): number | undefined {
      return this.toDos[this.toDos.length - 1] && this.toDos[this.toDos.length - 1].id + 1;
    },
  },
  actions: {
    addToDo(title: string, description: string) {
      this.toDos.push({
        title,
        description,
        id: this.lastToDoId ?? 1,
        done: false,
      });
    },
  },
});
