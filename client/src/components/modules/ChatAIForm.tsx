import { FormEvent } from 'react'
import {
  ArrowIcon,
  MicrophoneIcon,
  PaperClipIcon,
  SquareForbidIcon,
} from '../icons'
import { Loader } from './Loader'
import { checkIsNotEmpty } from '../../utils/checkIsNotEmpty'

type ChatAIForm = {
  input: string
  setInput: (value: string) => void
  sendMessage: (value: string) => void
  isLoading: boolean
}

export function ChatAIForm({
  input,
  setInput,
  sendMessage,
  isLoading,
}: ChatAIForm) {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (checkIsNotEmpty(input)) {
      sendMessage(input)
    }
  }

  return (
    <form className='relative' onSubmit={handleSubmit}>
      <textarea
        disabled={isLoading}
        value={input}
        onChange={handleInputChange}
        className='resize-none p-4 pb-12 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
        placeholder='Ask me anything...'
      />

      <div className='absolute bottom-px inset-x-px p-2 rounded-b-md bg-white dark:bg-slate-900'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <button
              type='button'
              className='inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            >
              <SquareForbidIcon className='flex-shrink-0 size-4' />
            </button>

            <button
              type='button'
              className='inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              disabled={isLoading}
            >
              <PaperClipIcon className='flex-shrink-0 size-4' />
            </button>
          </div>
          <div className='flex items-center gap-x-1'>
            <button
              type='button'
              className={`inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 'hover:text-blue-600 dark:hover:text-blue-500 cursor-p focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
              disabled={isLoading}
            >
              <MicrophoneIcon className='flex-shrink-0 size-4' />
            </button>

            <button
              type='submit'
              className={`inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-white ${isLoading ? 'bg-slate-800' : 'bg-blue-600 hover:bg-blue-500'}  focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader />
              ) : (
                <ArrowIcon className='flex-shrink-0 size-4' />
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
