type DescriptionProps = {
  text: string
}

export function Description({ text }: DescriptionProps) {
  return (
    <div className='mt-5 max-w-3xl text-center mx-auto'>
      <p className='text-lg text-gray-600 dark:text-gray-400'>{text}</p>
    </div>
  )
}
