<script setup>
import { TCard } from '@/components/Card';
</script>

<template>
  <main class="t-toDoList-page">
    <div class="t-toDoList-page__container">
      <TCard />
    </div>
  </main>
</template>

<style lang="scss">
  .t-toDoList-page {
    background-color: $main-bg;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    &__container {
      max-width: 420px;
      width: 100%;
      margin: 0 auto;

      @media (max-width: 430px) {
        max-width: 400px;
      }
    }
  }
</style>
