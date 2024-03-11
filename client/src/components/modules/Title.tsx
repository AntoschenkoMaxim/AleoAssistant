import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type TitleProps = {
  text: string
  subtext: string
  typingSpeed?: number
  delayBeforeRepeat?: number
}

export function Title({
  text,
  subtext,
  typingSpeed = 200,
  delayBeforeRepeat = 3500,
}: TitleProps) {
  const [displayedSubtext, setDisplayedSubtext] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let typingTimeout: number

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setDisplayedSubtext((prev) => prev.slice(0, prev.length - 1))
      }, typingSpeed / 2)

      if (displayedSubtext === '') {
        setIsDeleting(false)
      }
    } else {
      typingTimeout = setTimeout(() => {
        const nextCharIndex = displayedSubtext.length
        setDisplayedSubtext(subtext.slice(0, nextCharIndex + 1))
      }, typingSpeed)

      if (displayedSubtext === subtext) {
        setTimeout(() => setIsDeleting(true), delayBeforeRepeat)
      }
    }

    return () => clearTimeout(typingTimeout)
  }, [displayedSubtext, isDeleting, subtext, typingSpeed, delayBeforeRepeat])

  return (
    <h1 className='block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200'>
      {text}{' '}
      <motion.span className='bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>
        {displayedSubtext}
      </motion.span>
    </h1>
  )
}
