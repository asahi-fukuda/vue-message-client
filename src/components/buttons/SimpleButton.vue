<template lang="pug">
button.btn(@click="$emit('click')") {{ text }}
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    text: {
      type: String as PropType<string>,
      required: true,
    },
  },
  emits: ['click'],
})
</script>

<style lang="scss" scoped>
.btn {
  background-color: #8a2be2;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 8px;
  line-height: 20px;
  cursor: pointer;
  &:hover {
    background-color: #9932cc;
  }
  &:active {
    opacity: 0.8;
  }
}
</style>
