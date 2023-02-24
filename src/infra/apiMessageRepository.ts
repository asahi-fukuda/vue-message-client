import Message from '@/domain/models/message'
import MessageRepository from '@/domain/repositories/messageRepository'
import { DefaultApi } from '@/api'

export default class ApiMessageRepository implements MessageRepository {
  async list(): Promise<Message[]> {
    const api = new DefaultApi()
    return api.getMessages().then((res) => {
      return res.data.map((row: any) => {
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
    const data = {
      name: message.name || '',
      message: message.message || '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    const res = await api.createMessage(data)
    return new Message({
      id: res.data.id,
      name: res.data.name,
      message: res.data.message,
      postedAt: new Date(res.data.created_at),
    })
  }
}
