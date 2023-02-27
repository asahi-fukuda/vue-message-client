import Message from '@/domain/models/message'

export default interface MessageRepository {
  list(): Promise<Message[]>
  save(message: Message): Promise<Message>
}
