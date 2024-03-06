import { useMutation, useQueryClient } from 'react-query'
import { sendMessageToAI } from '../api/sendMessageToAI'

interface Message {
  author: 'ai' | 'user'
  message: any
}

export const useSendMessageToAIQuery = (
  url: string,
  setInput: (value: string) => void
) => {
  const client = useQueryClient()
  return useMutation({
    mutationFn: (message: string) => sendMessageToAI(url, message),
    onMutate: async (newMessage) => {
      await client.cancelQueries('messages')

      const previousMessages = client.getQueryData<Message[]>('messages')

      client.setQueryData<Message[]>('messages', (oldMessages = []) => [
        ...oldMessages,
        { author: 'user', message: newMessage },
      ])
      setInput('')
      return { previousMessages }
    },
    onSuccess: (response) => {
      client.setQueryData<Message[]>('messages', (oldMessages = []) => [
        ...oldMessages,
        { author: 'ai', message: response.data.message },
      ])
    },
    onSettled: () => {
      client.invalidateQueries('messages')
    },
  })
}
