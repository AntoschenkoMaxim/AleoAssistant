import { ChevronIcon } from '../icons'

type CardProps = {
  setOrder: (value: string) => void
  title: string
  question: string
  sendMessage: (value: string) => void
}

export function Card({ title, question, setOrder, sendMessage }: CardProps) {
  const handleSendClick = () => {
    sendMessage(question)
    setOrder('chat')
  }

  return (
    <button
      className='group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
      onClick={handleSendClick}
    >
      <div className='p-4 md:p-5'>
        <div className='flex justify-between items-center'>
          <div>
            <h3 className='group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-blue-600 dark:text-gray-200 text-left'>
              {title}
            </h3>
            <p className='text-sm text-gray-500 text-left'>{question}</p>
          </div>
          <div className='ps-3'>
            <ChevronIcon
              className='flex-shrink-0 size-6 text-gray-800 dark:text-gray-200
          group-hover:text-blue-600'
            />
          </div>
        </div>
      </div>
    </button>
  )
}
