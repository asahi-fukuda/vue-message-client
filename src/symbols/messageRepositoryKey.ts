import MessageRepository from '@/domain/repositories/messageRepository'
import { InjectionKey } from 'vue'

export const messageRepositoryKey: InjectionKey<MessageRepository> = Symbol()
