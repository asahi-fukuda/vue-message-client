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
}
