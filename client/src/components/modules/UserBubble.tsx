import { motion } from 'framer-motion'
import { UserIcon } from '../icons'

type UserBubbleProps = {
  message: string
  delay: number
}

export function UserBubble({ message, delay }: UserBubbleProps) {
  const listVariants = {
    visible: () => ({
      opacity: 1,
      transition: {
        delay: delay,
      },
    }),
    hidden: { opacity: 0 },
  }
  return (
    <motion.li
      variants={listVariants}
      initial='hidden'
      animate='visible'
      className='max-w-2xl ms-auto flex justify-end gap-x-2 sm:gap-x-4'
    >
      <div className='grow text-end space-y-3'>
        <div className='inline-block bg-blue-600 rounded-lg p-4 shadow-sm'>
          <p className='text-sm text-white'>{message}</p>
        </div>
      </div>

      <span className='flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full  bg-blue-600 '>
        <UserIcon className='text-gray-200' />
      </span>
    </motion.li>
  )
}
