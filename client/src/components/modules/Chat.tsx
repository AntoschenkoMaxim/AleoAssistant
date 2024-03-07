import { UserBubble } from './UserBubble'
import { AiBubble } from './AiBubble'
import { Message } from '../../utils/types'
import { Container } from './Container'
import { ArrowIcon, MicrophoneIcon, PaperClipIcon, TrashIcon } from '../icons'

type ChatProps = {
  input: string
  setInput: (value: string) => void
  sendMessage: (value: string) => void
  isLoading: boolean
  messages: Message[]
  handleClearClick: () => void
  handleCreateClick: () => void
}

export function Chat({
  input,
  setInput,
  sendMessage,
  isLoading,
  messages,
  handleClearClick,
}: ChatProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  const handleSendClick = () => {
    sendMessage(input)
  }

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
            {/* Chat Bubble */}
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

          {/* Input */}
          <div className='relative'>
            <textarea
              disabled={isLoading}
              value={input}
              onChange={handleInputChange}
              className='resize-none p-4 pb-12 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
              placeholder='Ask me anything...'
            />

            {/* Toolbar */}
            <div className='absolute bottom-px inset-x-px p-2 rounded-b-md bg-white dark:bg-slate-900'>
              <div className='flex justify-between items-center'>
                {/* Button Group */}
                <div className='flex items-center'>
                  {/* Mic Button */}
                  <button
                    type='button'
                    className='inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  >
                    <svg
                      className='flex-shrink-0 size-4 '
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <rect width='18' height='18' x='3' y='3' rx='2' />
                      <line x1='9' x2='15' y1='15' y2='9' />
                    </svg>
                  </button>
                  {/* End Mic Button */}

                  {/* Attach Button */}
                  <button
                    type='button'
                    className='inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                    disabled={isLoading}
                  >
                    <PaperClipIcon className='flex-shrink-0 size-4' />
                  </button>
                  {/* End Attach Button */}
                </div>
                {/* End Button Group */}

                {/* Button Group */}
                <div className='flex items-center gap-x-1'>
                  {/* Mic Button */}
                  <button
                    type='button'
                    className={`inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 'hover:text-blue-600 dark:hover:text-blue-500 cursor-p focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
                    disabled={isLoading}
                  >
                    <MicrophoneIcon className='flex-shrink-0 size-4' />
                  </button>
                  {/* End Mic Button */}

                  {/* Send Button */}
                  <button
                    type='button'
                    className={`inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-white ${isLoading ? 'bg-slate-800' : 'bg-blue-600 hover:bg-blue-500'}  focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
                    disabled={isLoading}
                    onClick={handleSendClick}
                  >
                    <ArrowIcon className='flex-shrink-0 size-4' />
                  </button>
                  {/* End Send Button */}
                </div>
                {/* End Button Group */}
              </div>
            </div>
            {/* End Toolbar */}
          </div>
          {/* End Input */}
        </div>
      </div>
    </>
  )
}
