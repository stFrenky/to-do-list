<script setup>
import { ref, reactive } from 'vue';
import TBtn from './TBtn.vue';
import { TList } from '@/components/List';
import { TModal } from '@/components/Modal';
import { useToDoStore } from '@/stores/ToDo';

const toDoStore = useToDoStore();

const { addToDo } = toDoStore;

const mode = ref('view');

const newToDo = reactive({
  title: '',
  description: '',
});
const add = () => {
  if (mode.value === 'view') {
    mode.value = 'edit';

    return;
  }

  if (!newToDo.title) return;

  mode.value = 'view';

  addToDo(newToDo.title, newToDo.description);

  newToDo.title = '';
  newToDo.description = '';
};

</script>

<template>
  <div class="t-card">
    <div class="t-card__inner">
      <div class="t-card__header">
        <div class="t-card__title">
          ToDo list
        </div>
        <TBtn
          @click="add"
        />
      </div>
      <TModal
        v-model:title="newToDo.title"
        v-model:description="newToDo.description"
        :class="{
          show: mode === 'edit'
        }"
      />
      <TList />
    </div>
  </div>
</template>

<style lang="scss">
  .t-card {
    position: relative;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    @media (max-width: 430px) {
      max-width: 400px;
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      max-width: 395px;
      height: 67px;
      top: -20px;
      left: 0;
      z-index: 1;
      transition: all .3s;

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
      top: -30px;
      transition: all .3s;

      background: linear-gradient(180deg, #4F5565 0%, #000000 53.65%);
      border-radius: 20px;
      transform: rotate(-4.48deg);

      @media (max-width: 430px) {
        max-width: 284px;
      }
    }

    &:hover {
      &:before {
        top: -30px;
      }

      &:after {
        top: -50px;
      }
    }

    &__inner {
      box-sizing: border-box;
      position: relative;
      padding: 30px;
      width: 100%;
      height: 540px;
      background-color: $card-bg;
      color: $white;
      z-index: 2;
      border-radius: 20px 0 40px;
      box-shadow: 0 14px 34px rgba(0, 0, 0, 0.25);;

      &:after {
        content: '';
        position: absolute;
        bottom: 1px;
        left: 30px;
        max-width: 80%;
        width: 100%;
        height: 75px;
        background: linear-gradient(180deg, rgba(37, 46, 66, 0) 0%, #252E42 67.19%);
      }

    }

    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    &__title {
      font-family: 'Montserrat-Bold',serif;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      color: $white;
    }
  }
</style>
