import { api } from './axiosInstance'

export async function sendMessageToAI(url: string, message: string) {
  return api({
    method: 'POST',
    url: url,
    data: { role: 'user', content: message },
  })
}
