type BannerProps = {
  title: string
  button: string
  href?: string
}

export function Banner({ title, button, href }: BannerProps) {
  return (
    <div className='flex justify-center'>
      <a
        className='inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400'
        href={href}
        target='_blank'
      >
        {title}
        <span className='flex items-center gap-x-1'>
          <span className='border-s border-gray-200 dark:border-gray-600 text-blue-600 ps-2 dark:text-blue-500'>
            {button}
          </span>
          <svg
            className='flex-shrink-0 size-4 text-blue-600'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='m9 18 6-6-6-6' />
          </svg>
        </span>
      </a>
    </div>
  )
}
