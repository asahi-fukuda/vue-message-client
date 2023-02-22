import axios, { Axios } from 'axios'
import Message from '@/domain/models/message'
import MessageRepository from '@/domain/repositories/messageRepository'

export default class ApiMessageRepository implements MessageRepository {
  async list(): Promise<Message[]> {
    return axios.get('http://localhost:8080/messages', {}).then((res) => {
      return res.data.map((row: any) => {
        return new Message({
          id: row.id,
          name: row.name,
          message: row.message,
          postedAt: row.created_at,
        })
      })
    })
  }
}
