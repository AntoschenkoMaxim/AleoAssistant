type CardProps = {
  title: string
  question: string
}

export function Card({ title, question }: CardProps) {
  return (
    <a
      className='group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
      href='#'
    >
      <div className='p-4 md:p-5'>
        <div className='flex justify-between items-center'>
          <div>
            <h3 className='group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-blue-600 dark:text-gray-200'>
              {title}
            </h3>
            <p className='text-sm text-gray-500'>{question}</p>
          </div>
          <div className='ps-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-chevron-right  flex-shrink-0 size-6 text-gray-800 dark:text-gray-200
          group-hover:text-blue-600'
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
              <path d='M9 6l6 6l-6 6' />
            </svg>
          </div>
        </div>
      </div>
    </a>
  )
}
