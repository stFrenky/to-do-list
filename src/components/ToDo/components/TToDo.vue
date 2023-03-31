<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  coption: {
    type: String,
  },
});

</script>

<template>
  <div class="t-toDo">
    <input
      id="scales"
      type="checkbox"
      class="t-toDo__checkbox"
    >

    <label
      for="scales"
      class="t-toDo__label"
    >
      <div class="t-toDo__text">
        <span class="t-toDo__title">{{ title }}</span>
        <span class="t-toDo__caption">{{ coption }}</span>
      </div>
    </label>
  </div>
</template>

<style lang="scss">
  .t-toDo {
    padding-top: 9px;
    padding-bottom: 9px;

    &__checkbox {
      position: absolute;
      opacity: 0;
      z-index: -1;
    }

    &__checkbox+&__label {
      display: inline-flex;
      align-items: center;
      user-select: none;
    }
    &__checkbox+&__label::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      flex-grow: 0;
      border-radius: 6px;
      margin-right: 15px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
      background-color: $checkbox-bg;
    }

    &__checkbox:checked+&__label::before {
      background-color: $accent;
      background-image: url("@/assets/icons/check-mark.svg");
    }

    &__text {
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-family: 'Montserrat-Medium';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      &:hover {
        color: $accent;
      }
    }

    &__caption {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: $checkbox-bg;
    }
  }
</style>
