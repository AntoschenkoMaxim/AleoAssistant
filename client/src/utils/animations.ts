export const listVariants = (delay: number) => ({
  visible: () => ({
    opacity: 1,
    transition: {
      delay: delay,
    },
  }),
  hidden: { opacity: 0 },
})
