export function Loader() {
  return (
    <div
      className='animate-spin inline-block size-3 border-[2px] border-current border-t-transparent text-white rounded-full'
      aria-label='loading'
    >
      <span className='sr-only'>Loading...</span>
    </div>
  )
}
