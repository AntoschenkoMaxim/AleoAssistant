type ArrowIconProps = {
  className?: string
}

export function ArrowIcon({ className }: ArrowIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`icon icon-tabler icon-tabler-arrow-up ${className}`}
      viewBox='0 0 24 24'
      strokeWidth={3}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 5l0 14' />
      <path d='M18 11l-6 -6' />
      <path d='M6 11l6 -6' />
    </svg>
  )
}