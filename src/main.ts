import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { messageRepositoryKey } from '@/symbols/messageRepositoryKey'
import MessageRepository from '@/domain/repositories/messageRepository'
import ApiMessageRepository from '@/infra/apiMessageRepository'

const messageRepository: MessageRepository = new ApiMessageRepository()

createApp(App)
  .use(router)
  .provide(messageRepositoryKey, messageRepository)
  .mount('#app')
