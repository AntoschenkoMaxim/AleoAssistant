import { FormEvent } from 'react'
import { ArrowIcon } from '../icons'
import { checkIsNotEmpty } from '../../utils/checkIsNotEmpty'

type LandingFormProps = {
  setOrder: (value: string) => void
  input: string
  setInput: (value: string) => void
  sendMessage: (value: string) => void
}

export function LandingAIForm({
  setOrder,
  input,
  setInput,
  sendMessage,
}: LandingFormProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (checkIsNotEmpty(input)) {
      sendMessage(input)
      setOrder('chat')
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]'>
        <div className='flex-[1_0_0%]'>
          <label
            htmlFor='hs-search-article-1'
            className='block text-sm text-gray-700 font-medium dark:text-white'
          >
            <span className='sr-only'>Ask me about Aleo...</span>
          </label>
          <input
            value={input}
            onChange={handleInputChange}
            name='hs-search-article-1'
            id='hs-search-article-1'
            className='py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600'
            placeholder='Ask me about Aleo...'
          />
        </div>
        <div className='flex-[0_0_auto]'>
          <button
            type='submit'
            className='size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
          >
            <ArrowIcon className='flex-shrink-0 size-6 stroke-2' />
          </button>
        </div>
      </div>
    </form>
  )
}
