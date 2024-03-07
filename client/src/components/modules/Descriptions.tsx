type DescriptionProps = {
  text: string
}

export function Description({ text }: DescriptionProps) {
  return (
    <div className='mt-5 max-w-3xl text-center mx-auto'>
      <p className='text-lg text-gray-600 dark:text-gray-400 whitespace-pre-wrap'>
        {text}
        <span className='font-semibold bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>
          builded by community
        </span>
      </p>
    </div>
  )
}
