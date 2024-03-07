import { cards } from '../../utils/constants'
import { Banner } from './Banner'
import { Card } from './Card'
import { Container } from './Container'
import { Description } from './Description'
import { Title } from './Title'
import { ArrowIcon } from '../icons'

type LandingProps = {
  setOrder: (value: string) => void
  input: string
  setInput: (value: string) => void
  sendMessage: (value: string) => void
}

export function Landing({
  setOrder,
  input,
  setInput,
  sendMessage,
}: LandingProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    sendMessage(input)
    setOrder('chat')
  }

  return (
    <Container>
      <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10'>
        <Banner
          title='Explore our telegram bot'
          button='Soon'
          href='https://t.me/AleoAssistant_bot'
        />
        <Title text='Welcome to' subtext='Aleo AI' />
        <Description
          text={`A user-friendly and secure assistant bringing ease to Aleo Ecosystem. \n`}
        />

        <div className='mt-7 sm:mt-12 mx-auto max-w-xl relative'>
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
        </div>
        <p className='mt-7 sm:mt-10 text-center text-lg text-gray-800 dark:text-gray-400'>
          TRENDING REQUESTS
        </p>

        <div className='max-w-5xl py-6 sm:px-6 lg:px-8 lg:py-10 mx-auto'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6'>
            {cards.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                question={item.question}
                sendMessage={sendMessage}
                setOrder={setOrder}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}
