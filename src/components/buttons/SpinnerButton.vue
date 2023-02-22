<template lang="pug">
button(:disabled="isLoading")
  .btn
    .svg
      Spinner(:SpinnerWidth="20" :SpinnerHeight="20" :SpinnerSpeed="1.0" v-show="isLoading")
      svg(xmlns="http://www.w3.org/2000/svg", width="20", height="20", viewBox="0 0 200 200" v-show="isCompleted")
        path(d="M4890.068,1665.319a100,100,0,1,0,100,100A100,100,0,0,0,4890.068,1665.319Zm43.73,51.422,21.414,19.687-74.752,81.3-60.022-61.5,20.819-20.32,38.575,39.52Z", transform="translate(-4790.067 -1665.319)")
    .text {{ text }}
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import Spinner from '@/components/indicators/Spinner.vue'
export default defineComponent({
  components: {
    Spinner,
  },
  props: {
    text: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup() {
    const isLoading = ref(false)
    const isCompleted = ref(false)
    const progress = () => {
      isLoading.value = true
    }
    const onCompleted = () => {
      isLoading.value = false
      isCompleted.value = true
      setTimeout(() => {
        isCompleted.value = false
      }, 2000)
    }
    return {
      isLoading,
      isCompleted,
      progress,
      onCompleted,
    }
  },
})
</script>

<style lang="scss" scoped>
button {
  background-color: #8a2be2;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #9932cc;
  }
  &:active {
    opacity: 0.8;
  }
  svg {
    fill: #ffffff;
  }
  .btn {
    display: flex;
  }
  .text {
    line-height: 20px;
    margin-left: 5px;
  }
}
</style>
