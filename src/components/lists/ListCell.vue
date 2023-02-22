<template lang="pug">
.list-cell
  .time 
    div {{ time }}
  .message
    div {{ message }}
  .name 
    div {{ name }}
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    time: {
      type: String as PropType<string>,
      required: true,
    },
    message: {
      type: String as PropType<string>,
      required: true,
    },
    name: {
      type: String as PropType<string>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.list-cell {
  border-bottom: solid 2px whitesmoke;
  background-color: #fff;
  line-height: 15px;
  &:first-child {
    border-top: solid 2px whitesmoke;
  }
  .time {
    margin-left: 15px;
    font-size: 12px;
    text-align: left;
  }
  .message {
    margin-left: 15px;
    font-size: 18px;
    text-align: left;
    font-weight: bold;
  }
  .name {
    margin-right: 5px;
    font-size: 12px;
    text-align: right;
  }
}
</style>
