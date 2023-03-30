<script setup>
import { TField } from '@/components/Field';
</script>

<template>
  <main class="t-toDoList-page">
    <TField />
  </main>
</template>

<style lang="scss">
  .t-toDoList-page {
    background-color: $main-bg;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
