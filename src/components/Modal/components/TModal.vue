<script setup></script>

<template>
  <div class="t-modal">
    <div class="t-modal__new-toDo">
      <input
        type="text"
        placeholder="New ToDo"
      >
    </div>
    <div class="t-modal__placeholder">
      <input
        type="text"
        placeholder="Placeholder"
      >
    </div>
  </div>
</template>

<style lang="scss">
.t-modal {

  display: none !important;

  box-sizing: border-box;
  position: absolute;
  left: 0;
  padding: 30px;
  width: 100%;
  height: 100%;
  background-color: $card-bg;
  color: $white;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &__new-toDo, &__placeholder {
    min-height: 50px;
    background-color: $main-bg;
    border-radius: 10px;
    padding-left: 10px;
    color: $white;
    display: flex;
    align-items: center;
    font-size: 18px;
    input {
      all: unset;
    }
  }
}
</style>
