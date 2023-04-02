<script setup lang="ts">
import { useModelWrapper } from '@/composables';

interface Props {
  title: string;
  description?: string;
}

const props = defineProps<Props>();

const emit = defineEmits(['update:title', 'update:description']);

const title = useModelWrapper(props, emit, 'title');
const description = useModelWrapper(props, emit, 'description');

</script>

<template>
  <div class="t-modal">
    <div class="t-modal__new-toDo">
      <input
        v-model="title"
        type="text"
        placeholder="New ToDo"
      >
    </div>
    <div class="t-modal__placeholder">
      <input
        v-model="description"
        type="text"
        placeholder="Placeholder"
      >
    </div>
  </div>
</template>

<style lang="scss">
.t-modal {
  display: none;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  padding: 30px;
  width: 100%;
  background-color: $card-bg;
  color: $white;
  flex-direction: column;
  gap: 15px;

  &__new-toDo, &__placeholder {
    min-height: 50px;
    background-color: $main-bg;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    color: $white;
    display: flex;
    align-items: center;
    font-size: 18px;
    input {
      all: unset;
      width: 100%;
    }
  }

  &.show {
    display: flex;
  }
}

</style>
