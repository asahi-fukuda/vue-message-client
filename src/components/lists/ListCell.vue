<template lang="pug">
.list-cell
  .time 
    div {{ formattedTime }}
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
      type: Date as PropType<Date>,
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
  setup(props) {
    const formattedTime = props.time.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
    return {
      formattedTime,
    }
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
