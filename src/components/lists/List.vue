<template lang="pug">
ListCell(v-for="message in messages" :time="message.time" :message="message.message" :name="message.name")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import ListCell from '@/components/lists/ListCell.vue'
export default defineComponent({
  components: {
    ListCell,
  },
  setup() {
    const messages = ref([
      {
        time: '5分前',
        message: 'message1',
        name: 'fukuda',
      },
      {
        time: '10分前',
        message: 'message2',
        name: 'asahi',
      },
      {
        time: '12分前',
        message: 'message3',
        name: 'fukuda',
      },
    ])
    return {
      messages,
    }
  },
})
</script>

<style lang="scss" scoped></style>
