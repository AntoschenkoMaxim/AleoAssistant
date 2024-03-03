import { Banner } from './banner'
import { Card } from './card'
import { Description } from './description'
import { Title } from './title'

type LandingProps = {
  setOrder: (value: string) => void
}

export function Landing({ setOrder }: LandingProps) {
  const cards = [
    {
      title: 'Question 1',
      question: `Can you explain Aleo's blockchain technology?`,
    },
    {
      title: 'Question 2',
      question: `What tools and programming languages does Aleo support?`,
    },
    {
      title: 'Question 3',
      question: `What are private smart contracts, and how do they operate in Aleo?`,
    },
  ]

  return (
    <div className="relative overflow-hidden flex-[1_0_auto] before:absolute before:top-0 before:start-1/2 before:bg-[url('./assets/light.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('./assets/dark.svg')]">
      <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10'>
        <Banner
          title='Explore our telegram bot'
          button='Explore'
          href='https://t.me/AleoAssistant_bot'
        />
        <Title text='Welcome to' subtext='Aleo AI' />
        <Description text='A user-friendly and secure assistant bringing ease to Aleo Ecosystem.' />
        {/* Buttons */}
        <div className='mt-7 sm:mt-12 mx-auto max-w-xl relative'>
          {/* Form */}
          <form>
            <div className='relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]'>
              <div className='flex-[1_0_0%]'>
                <label
                  htmlFor='hs-search-article-1'
                  className='block text-sm text-gray-700 font-medium dark:text-white'
                >
                  <span className='sr-only'>Ask me about Aleo...</span>
                </label>
                <input
                  name='hs-search-article-1'
                  id='hs-search-article-1'
                  className='py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600'
                  placeholder='Ask me about Aleo...'
                />
              </div>
              <div className='flex-[0_0_auto]'>
                <button
                  onClick={() => setOrder('chat')}
                  className='size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-brand-telegram'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4' />
                  </svg>
                </button>
              </div>
            </div>
          </form>
          {/* End Form */}
        </div>
        <p className='mt-7 sm:mt-10 text-center text-lg text-gray-800 dark:text-gray-400'>
          TRENDING REQUESTS
        </p>
        {/* End Buttons */}
        {/* Card Section */}
        <div className='max-w-5xl py-6 sm:px-6 lg:px-8 lg:py-10 mx-auto'>
          {/* Grid */}
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6'>
            {/* Cards */}
            {cards.map((card) => (
              <Card
                key={card.title}
                title={card.title}
                question={card.question}
              />
            ))}
          </div>
          {/* End Grid */}
        </div>
        {/* End Card Section */}
      </div>
    </div>
  )
}
