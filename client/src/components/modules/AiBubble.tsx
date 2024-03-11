import { motion } from 'framer-motion'
import { getListVariants } from '../../utils/getListVariants'
import { SmallLogoIcon } from '../icons/SmallLogoIcon'
import { questions } from '../../utils/constants'

type AiBubbleProps = {
  greetings: boolean
  reply?: string
  delay: number
}

export function AiBubble({ greetings, reply, delay }: AiBubbleProps) {
  return (
    <motion.li
      variants={getListVariants(delay)}
      initial='hidden'
      animate='visible'
      className='max-w-4xl  mx-auto flex gap-x-2 sm:gap-x-4'
    >
      <span className='flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full border border-gray-200 dark:bg-slate-900 dark:border-gray-700'>
        <SmallLogoIcon className='text-gray-800 dark:text-gray-200' />
      </span>
      <div className='bg-white border border-gray-200 rounded-lg py-2 px-4 space-y-3 dark:bg-slate-900 dark:border-gray-700'>
        {greetings === true ? (
          <>
            <h2 className='font-medium text-gray-800 dark:text-white'>
              How can we help?
            </h2>
            <div className='space-y-1.5'>
              <p className='mb-1.5 text-sm text-gray-800 dark:text-white'>
                You can ask questions like:
              </p>
              <ul className='list-disc list-outside space-y-1.5 ps-3.5'>
                {questions.map((item) => (
                  <li
                    key={item}
                    className='text-sm text-gray-800 dark:text-white'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <h2 className='font-medium text-gray-800 dark:text-white'>
              Aleo Assistant
            </h2>
            <p className='text-sm text-gray-800 dark:text-white white whitespace-pre-wrap'>
              {reply}
            </p>
          </>
        )}
      </div>
    </motion.li>
  )
}
