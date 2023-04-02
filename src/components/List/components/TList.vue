<script setup>
import { storeToRefs } from 'pinia';
import { TToDo } from '@/components/ToDo';
import { useToDoStore } from '@/stores/ToDo';

const toDoStore = useToDoStore();

const { toDos } = storeToRefs(toDoStore);
</script>

<template>
  <div class="t-toDo-list">
    <TToDo
      v-for="toDo in toDos"
      :id="toDo.id"
      :key="toDo.id"
      v-model:done="toDo.done"
      :title="toDo.title"
      :description="toDo.description"
    />
  </div>
</template>

<style lang="scss">
.t-toDo-list {
  overflow-y: scroll;
  overflow-x: hidden;
  height: 450px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $accent;
    border-radius: 10px;
  }
}
</style>
