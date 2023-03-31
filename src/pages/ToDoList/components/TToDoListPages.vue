<script setup>
import { TCard } from '@/components/Card';
</script>

<template>
  <main class="t-toDoList-page">
    <TCard />
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
