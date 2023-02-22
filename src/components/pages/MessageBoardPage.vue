<template lang="pug">
.board
  p.title Simple Message Board
  .button
    SimpleButton(text="New Message" @click="openModal")
  .list 
    List
  Modal(ref="modal")
</template>

<script lang="ts">
import { defineComponent, ref, inject, onMounted } from 'vue'
import SimpleButton from '@/components/buttons/SimpleButton.vue'
import Spinner from '@/components/indicators/Spinner.vue'
import List from '@/components/lists/List.vue'
import Modal from '@/components/modals/Modal.vue'
import { messageRepositoryKey } from '@/symbols/messageRepositoryKey'
import MessageRepository from '@/domain/repositories/messageRepository'
export default defineComponent({
  components: {
    SimpleButton,
    Spinner,
    List,
    Modal,
  },
  setup() {
    const messageRepository = inject<MessageRepository>(messageRepositoryKey)
    if (messageRepositoryKey === undefined) {
      throw `${messageRepositoryKey.toString()} is not provided`
    }
    const modal = ref<InstanceType<typeof Modal>>()
    const openModal = () => {
      modal.value?.open()
    }
    return {
      modal,
      openModal,
    }
  },
})
</script>

<style lang="scss" scoped>
.button {
  margin-bottom: 15px;
}
.title {
  font-weight: bold;
  font-size: 30px;
  color: black;
}
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
  width: 36%;
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
