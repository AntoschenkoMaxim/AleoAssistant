type SmallLogoIconProps = {
  className?: string
}

export function SmallLogoIcon({ className }: SmallLogoIconProps) {
  return (
    <svg
      className={className}
      width='20'
      height='22'
      viewBox='0 0 20 22'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M12.6626 0H10.2924H7.7004L3.39322 12.5703H6.01647L9.50482 2.31577H10.7678L14.2561 12.5703H9.44751H6.01647L5.20425 14.8861H10.2296H15.0382L17.2937 21.5021H20L12.6626 0Z' />
      <path d='M0.332825 21.5021H2.94909L5.20425 14.8861H2.59974L0.332825 21.5021Z' />
      <path d='M0.793476 12.5704L0 14.8861H2.59974L3.39321 12.5704H0.793476Z' />
    </svg>
  )
}
