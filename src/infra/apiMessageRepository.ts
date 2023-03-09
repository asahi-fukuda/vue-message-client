import Message from '@/domain/models/message'
import MessageRepository from '@/domain/repositories/messageRepository'
import { DefaultApi, NewMessage } from '@/api'

export default class ApiMessageRepository implements MessageRepository {
  async list(): Promise<Message[]> {
    const api = new DefaultApi()
    return api.getMessages().then((res) => {
      return res.data.messages.map((row: any) => {
        return new Message({
          id: row.id,
          name: row.name,
          message: row.message,
          postedAt: new Date(row.created_at),
        })
      })
    })
  }

  async save(message: Message): Promise<Message> {
    const api = new DefaultApi()
    const data: NewMessage = {
      name: message.name || '',
      message: message.message || '',
    }
    return api.createMessage(data).then(
      (res) =>
        new Message({
          id: res.data.id,
        })
    )
  }
}
