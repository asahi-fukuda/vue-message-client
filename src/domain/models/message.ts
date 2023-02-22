export type MessageId = number

export default class Message {
  id?: MessageId
  name?: string
  message?: string
  postedAt?: Date

  constructor(attr: Partial<Message>) {
    Object.assign(this, attr)
  }
}
