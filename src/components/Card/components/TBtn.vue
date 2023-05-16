<script setup></script>
<template>
  <button
    class="t-btn"
  >
    Add
  </button>
</template>

<style lang="scss">
  .t-btn {
    min-width: 54px;
    min-height: 27px;
    background-color: $accent;
    border-radius: 7px;
    text-transform: uppercase;
    border: none;
    color: $white;

    &:hover {
      background-color: $hover-accent;
    }
  }
</style>
