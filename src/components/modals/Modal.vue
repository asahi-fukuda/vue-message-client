<template lang="pug">
.modal-area(v-show="isActive")
  .modal-bg(@click="close")
  .modal-wrapper
    .modal-content
      .modal-label
        label Name
      .modal-form
        input(v-model="name", type="text")
      .modal-label
        label Message
      .modal-form
        input.input(v-model="message", type="text")
      .buttons
        button.cancel(@click="close") CANCEL
        SpinnerButton(text="POST" @click="post" ref="spinnerButton")
</template>

<script lang="ts">
import { defineComponent, ref, inject } from 'vue'
import SpinnerButton from '@/components/buttons/SpinnerButton.vue'
import { messageRepositoryKey } from '@/symbols/messageRepositoryKey'
import MessageRepository from '@/domain/repositories/messageRepository'
import useMessageList from '@/hooks/listMessages'
export default defineComponent({
  components: {
    SpinnerButton,
  },
  setup() {
    const messageRepository = inject<MessageRepository>(messageRepositoryKey)
    if (messageRepository === undefined) {
      throw `${messageRepositoryKey.toString()} is not provided`
    }

    const { save: postMessage } = useMessageList(messageRepository)

    const spinnerButton = ref<InstanceType<typeof SpinnerButton>>()

    const name = ref('')
    const message = ref('')
    const isActive = ref(false)

    const open = () => {
      isActive.value = true
    }
    const close = () => {
      isActive.value = false
    }

    const post = () => {
      spinnerButton.value?.progress()
      postMessage({
        name: name.value,
        message: message.value,
      }).then(() => {
        spinnerButton.value?.onCompleted()
      })
      close()
    }

    return {
      post,
      spinnerButton,
      name,
      message,
      isActive,
      open,
      close,
    }
  },
})
</script>

<style lang="scss" scoped>
.modal-area {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.modal-bg {
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.9);
}
.button {
  width: 68%;
  text-align: right;
}
.list {
  width: 60%;
  margin: auto;
}
.modal-wrapper {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: 500px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
}
.modal-label {
  text-align: left;
  label {
    font-weight: bold;
  }
}
.modal-form {
  margin-bottom: 20px;
  input {
    width: 95%;
    height: 25px;
  }
}
.buttons {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.cancel {
  border: none;
  margin-right: 35px;
  cursor: pointer;
  padding: 12px 30px;
  background-color: #fff;
  font-weight: bold;
}
</style>
