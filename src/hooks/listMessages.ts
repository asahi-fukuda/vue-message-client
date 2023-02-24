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

export type ListMessages = {
  messages: Message[]
}

export type State = {
  state: Ref<ListMessages>
  load: () => Promise<void>
}

export default function useListMessagesState(
  repository: MessageRepository
): State {
  const state = ref<ListMessages>({
    messages: [],
  })

  const load = async (): Promise<void> => {
    return repository.list().then((msgs) => {
      const messages = msgs.map((msg) => {
        return {
          id: msg.id ?? 0,
          name: msg.name ?? '',
          message: msg.message ?? '',
          postedAt: msg.postedAt ?? new Date(),
        }
      })

      state.value = {
        messages,
      }
    })
  }

  return {
    state,
    load,
  }
}
