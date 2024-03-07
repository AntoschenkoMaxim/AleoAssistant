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
import { Landing } from './components/modules/Landing'
import { Footer } from './components/modules/Footer'
import { Chat } from './components/modules/Chat'
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

  const handleCreateClick = () => {
    client.setQueryData<Message[]>('messages', [])
    client.invalidateQueries('messages')
  }

  return (
    <ThemeProvider>
      <div className='h-screen flex flex-col'>
        {/* <Header /> */}
        {order === 'landing' ? (
          <Landing
            setOrder={setOrder}
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
          />
        ) : (
          <Chat
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
            isLoading={isLoading}
            messages={messages}
            handleClearClick={handleClearClick}
            handleCreateClick={handleCreateClick}
          />
        )}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
