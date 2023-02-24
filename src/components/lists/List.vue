<template lang="pug">
ListCell(v-for="message in messages" :time="message.postedAt" :message="message.message" :name="message.name")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListCell from '@/components/lists/ListCell.vue'
export default defineComponent({
  components: {
    ListCell,
  },
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
