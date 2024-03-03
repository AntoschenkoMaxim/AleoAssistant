import { GithubIcon } from '../icons/GithubIcon'
import { OpenaiIcon } from '../icons/OpenaiIcon'
import { TwitterIcon } from '../icons/TwitterIcon'
import { LogoIcon } from '../icons/LogoIcon'
import { DiscordIcon } from '../icons/DiscordIcon'
import { YoutubeIcon } from '../icons/YoutubeIcon'

export function Footer() {
  const icons = [
    {
      icon: <OpenaiIcon className='flex-shrink-0 size-4' />,
      href: 'https://openai.com/blog/openai-api',
    },
    {
      icon: <TwitterIcon className='flex-shrink-0 size-4' />,
      href: 'https://twitter.com/AleoHQ',
    },
    {
      icon: <YoutubeIcon className='flex-shrink-0 size-4' />,
      href: 'https://www.youtube.com/@AleoLabs/featured',
    },
    {
      icon: <GithubIcon className='flex-shrink-0 size-4' />,
      href: 'https://github.com/AleoHQ',
    },
    {
      icon: <DiscordIcon className='flex-shrink-0 size-4' />,
      href: 'https://discord.com/invite/aleo',
    },
  ]

  return (
    <footer className='relative w-full py-8 flex-[0_0_auto] border-t border-gray-200 dark:bg-space-gray dark:border-gray-800'>
      <div className='max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-5 text-center '>
        <div className='flex justify-center md:justify-start'>
          <LogoIcon className='text-gray-800 dark:text-gray-200' />
        </div>
        <div className='md:text-end space-x-2'>
          {icons.map((icon) => (
            <a
              key={icon.href}
              className='size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border text-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 border-transparent dark:text-white disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600'
              href={icon.href}
              target='_blank'
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
