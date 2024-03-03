type TitleProps = {
  text: string
  subtext: string
}

export function Title({ text, subtext }: TitleProps) {
  return (
    <div className='mt-5 max-w-xl text-center mx-auto'>
      <h1 className='block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200'>
        {text}
        <span className='bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>
          {' '}
          {subtext}
        </span>
      </h1>
    </div>
  )
}
