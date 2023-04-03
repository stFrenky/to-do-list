<script setup>
import { TCard } from '@/components/Card';
</script>

<template>
  <main class="t-toDoList-page">
    <div class="t-toDoList-page__circle" />
    <div class="t-toDoList-page__container">
      <TCard />
      <div class="t-toDoList-page__copyright">
        © 2022. Albakov Shamil
      </div>
      <div class="circle" />
    </div>
  </main>
</template>

<style lang="scss">

  .t-toDoList-page {
    position: relative;
    background: $main-bg;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;

    &__circle {
      @keyframes animateBg {
        0% {
          transform: scaleX(0.6);
        }
       50% {
          transform: scaleX(1);
        }
        100% {
          transform: scaleX(0.6);
        }
      }

      position: absolute;
      background: radial-gradient(50% 50% at center, $card-bg 0%, $main-bg 100%);
      animation: animateBg  alternate 3s linear infinite;
      width: 80%;
      height: 90%;
    }

    &__container {
      max-width: 420px;
      width: 100%;
      margin: 0 auto;

      @media (max-width: 430px) {
        max-width: 400px;
      }
    }

    &__copyright {
      font-family: 'Montserrat',serif ;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: $copy-right;
      text-align: center;
      margin-top: 30px;
    }
  }
</style>
