import { MessageId } from '@/domain/models/message'
import MessageRepository from '@/domain/repositories/messageRepository'
import { ref, Ref } from 'vue'

// 表示用のメッセージ
export type Message = {
  id: MessageId
  name: string
  message: string
  postedAt: Date
}

export type newMessage = {
  name: string
  message: string
}

export type MessageList = {
  messages: Ref<Message[]>
  load: () => Promise<void>
  save: (message: newMessage) => Promise<void>
}

export default function useMessageList(
  repository: MessageRepository
): MessageList {
  const messages = ref<Message[]>([])

  const load = async (): Promise<void> => {
    return repository.list().then((msgs) => {
      const newMessages = msgs.map((msg) => {
        return {
          id: msg.id ?? 0,
          name: msg.name ?? '',
          message: msg.message ?? '',
          postedAt: msg.postedAt ?? new Date(),
        }
      })

      messages.value = newMessages
    })
  }

  const save = async (message: newMessage): Promise<void> => {
    repository
      .save(message)
      .then(() => {
        console.log('saved successfully')
      })
      .catch((error) => {
        console.log('failed to save:')
        throw error
      })
  }

  return {
    messages,
    load,
    save,
  }
}
