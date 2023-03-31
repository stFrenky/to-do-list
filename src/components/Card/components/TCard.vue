<script setup>
import TBtn from './TBtn.vue';
import { TList } from '@/components/List';
import { TModal } from '@/components/Modal';

</script>

<template>
  <div class="wrapper">
    <div class="t-card">
      <div class="t-card__header">
        <div class="t-card__title">
          ToDo list
        </div>
        <TBtn />
      </div>
      <TModal />
      <TList />
    </div>
  </div>
</template>

<style lang="scss">
  .wrapper {
    position: relative;
    max-width: 420px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 430px) {
      max-width: 400px;
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      max-width: 395px;
      height: 67px;
      top: -27px;
      left: 0;
      z-index: 1;

      background: linear-gradient(180deg, #31394D 0%, #091739 100%);
      border-radius: 20px;
      transform: rotate(-2.32deg);

      @media (max-width: 430px) {
        max-width: 328px;
      }

      @media (max-width: 330px) {
        max-width: 310px;
      }
    }

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      max-width: 341px;
      height: 85px;
      left: 0;
      top: -47px;

      background: linear-gradient(180deg, #4F5565 0%, #000000 53.65%);
      border-radius: 20px;
      transform: rotate(-4.48deg);

      @media (max-width: 430px) {
        max-width: 284px;
      }
    }
  }

  .t-card {
    box-sizing: border-box;
    position: relative;
    padding: 30px;
    width: 100%;
    height: 580px;
    background-color: $card-bg;
    color: $white;
    z-index: 2;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 30px;
      width: 360px;
      height: 75px;
      background: linear-gradient(180deg, rgba(37, 46, 66, 0) 0%, #252E42 67.19%);
    }

    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    &__title {
      font-family: 'Montserrat-Bold';
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      color: $white;
    }

    &__toDo-list {
      overflow-y: scroll;
      overflow-x: hidden;
      height: 100%;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: $accent;
        border-radius: 10px;
      }
    }
  }
</style>
