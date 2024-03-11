import {
  Banner,
  Card,
  Container,
  Description,
  LandingAIForm,
  Title,
} from '../components/modules'
import { cards } from '../utils/constants'

type LandingPageProps = {
  setOrder: (value: string) => void
  input: string
  setInput: (value: string) => void
  sendMessage: (value: string) => void
}

export function LandingPage({
  setOrder,
  input,
  setInput,
  sendMessage,
}: LandingPageProps) {
  return (
    <Container>
      <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10'>
        <Banner
          title='Explore our telegram bot'
          button='Explore'
          href='https://t.me/AleoAssistant_bot'
        />
        <div className='mt-5 max-w-xl text-center mx-auto'>
          <Title text='Welcome to' subtext='Aleo AI' />
        </div>
        <div className='mt-5 max-w-3xl text-center mx-auto'>
          <Description
            text={`A user-friendly and secure assistant bringing ease to Aleo Ecosystem. \n`}
          />
        </div>
        <div className='mt-7 sm:mt-12 mx-auto max-w-xl relative'>
          <LandingAIForm
            setOrder={setOrder}
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
          />
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
