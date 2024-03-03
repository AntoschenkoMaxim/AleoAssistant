import { IconBrightnessDown, IconBrightnessUp } from '@tabler/icons-react'
import { useTheme } from './theme-provider'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'default' : 'dark')
  }

  return (
    <div className='flex items-center gap-x-2 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700'>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? (
          <IconBrightnessUp
            size={20}
            className='text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-500'
          />
        ) : (
          <IconBrightnessDown
            size={20}
            className='text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500'
          />
        )}
      </button>
    </div>
  )
}
