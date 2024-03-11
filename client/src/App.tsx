import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './index.css'
import 'preline/preline'
import { IStaticMethods } from 'preline/preline'
import { ThemeProvider } from './components/modules/ThemeProvider'
import { useQueryClient } from 'react-query'
import { Message } from './utils/types'
import { useSendMessageToAIQuery } from './hooks/useSendMessageToAIQuery'
import { AI_URL } from './utils/constants'
import { LayoutPage } from './pages'
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

function App() {
  const location = useLocation()

  useEffect(() => {
    window.HSStaticMethods.autoInit()
  }, [location.pathname])

  const client = useQueryClient()

  const [order, setOrder] = useState<string>('landing')

  const [input, setInput] = useState<string>('')

  const { mutate: sendMessage, isLoading } = useSendMessageToAIQuery(
    AI_URL,
    setInput
  )

  const messages = client.getQueryData<Message[]>('messages') || []

  const handleClearClick = () => {
    client.setQueryData<Message[]>('messages', [])
    client.getQueryData<Message[]>('messages') || []
    setOrder('landing')
  }

  return (
    <ThemeProvider>
      <LayoutPage
        order={order}
        setOrder={setOrder}
        input={input}
        setInput={setInput}
        sendMessage={sendMessage}
        isLoading={isLoading}
        messages={messages}
        handleClearClick={handleClearClick}
      />
    </ThemeProvider>
  )
}

export default App
