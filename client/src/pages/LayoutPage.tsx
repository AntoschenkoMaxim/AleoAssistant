import { Footer } from '../components/modules'
import { Message } from '../utils/types'
import { ChatPage } from './ChatPage'
import { LandingPage } from './LandingPage'

type LayoutPageProps = {
  order: string
  setOrder: (value: string) => void
  input: string
  setInput: (value: string) => void
  sendMessage: (value: string) => void
  messages: Message[]
  isLoading: boolean
  handleClearClick: () => void
}

export function LayoutPage({
  order,
  setOrder,
  input,
  setInput,
  sendMessage,
  messages,
  isLoading,
  handleClearClick,
}: LayoutPageProps) {
  return (
    <div className='h-screen flex flex-col'>
      {/* <Header /> */}
      {order === 'landing' ? (
        <LandingPage
          setOrder={setOrder}
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
        />
      ) : (
        <ChatPage
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
          isLoading={isLoading}
          messages={messages}
          handleClearClick={handleClearClick}
        />
      )}
      <Footer />
    </div>
  )
}
