import { TrashIcon } from '../components/icons'
import {
  AiBubble,
  ChatAIForm,
  Container,
  UserBubble,
} from '../components/modules'
import { Message } from '../utils/types'

type ChatPageProps = {
  input: string
  setInput: (value: string) => void
  sendMessage: (value: string) => void
  isLoading: boolean
  messages: Message[]
  handleClearClick: () => void
}

export function ChatPage({
  input,
  setInput,
  sendMessage,
  isLoading,
  messages,
  handleClearClick,
}: ChatPageProps) {
  return (
    <>
      <Container>
        <div className='max-w-4xl px-4 pt-4 sm:px-6 lg:px-8 sm:pt-8 lg:pt-14 mx-auto'>
          <ul
            className='space-y-5 py-2 max-h-[600px] overflow-y-auto
  					[&::-webkit-scrollbar]:w-0
  					[&::-webkit-scrollbar-track]:rounded-full
  				[&::-webkit-scrollbar-track]:bg-gray-100
  					[&::-webkit-scrollbar-thumb]:rounded-full
  				[&::-webkit-scrollbar-thumb]:bg-gray-300
  				dark:[&::-webkit-scrollbar-track]:bg-slate-700
  				dark:[&::-webkit-scrollbar-thumb]:bg-slate-500'
          >
            <AiBubble greetings={true} delay={0.3} />

            {messages.map((item, index) =>
              item.author === 'user' ? (
                <UserBubble key={index} message={item.message} delay={0.5} />
              ) : (
                <AiBubble
                  key={index}
                  greetings={false}
                  reply={item.message}
                  delay={0.5}
                />
              )
            )}
          </ul>
        </div>
      </Container>
      <div className=' bg-white  pt-2 pb-3 sm:pt-4 sm:pb-6 dark:bg-slate-900'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-end items-center mb-3'>
            <button
              type='button'
              disabled={isLoading}
              className='py-1.5 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              onClick={handleClearClick}
            >
              <TrashIcon className='size-4' />
              Clear and finish
            </button>
          </div>

          <ChatAIForm
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
            isLoading={isLoading}
          />
        </div>
      </div>
    </>
  )
}
