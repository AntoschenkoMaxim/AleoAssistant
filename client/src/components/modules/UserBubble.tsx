import { UserIcon } from '../icons/UserIcon'

type UserBubbleProps = {
  message: string
}

export function UserBubble({ message }: UserBubbleProps) {
  return (
    <li className='max-w-2xl ms-auto flex justify-end gap-x-2 sm:gap-x-4'>
      <div className='grow text-end space-y-3'>
        <div className='inline-block bg-blue-600 rounded-lg p-4 shadow-sm'>
          <p className='text-sm text-white'>{message}</p>
        </div>
      </div>

      <span className='flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full  bg-blue-600 '>
        <UserIcon className='text-gray-200' />
      </span>
    </li>
  )
}
