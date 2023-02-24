import Message from '@/domain/models/message'
import MessageRepository from '@/domain/repositories/messageRepository'

export type State = {
  save: (message: Message) => Promise<void>
}

export default function useSaveMessageState(
  repository: MessageRepository
): State {
  const save = async (message: Message): Promise<void> => {
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
    save,
  }
}
