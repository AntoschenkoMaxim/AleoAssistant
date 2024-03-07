import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden flex-[1_0_auto] before:absolute before:top-0 before:start-1/2 before:bg-[url('./assets/light.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('./assets/dark.svg')]"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
