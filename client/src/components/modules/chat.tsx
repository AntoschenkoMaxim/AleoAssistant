import { SmallLogoIcon } from '../icons/SmallLogoIcon'
import { UserIcon } from '../icons/UserIcon'

type ChatProps = {
  setOrder: (value: string) => void
}

export function Chat({ setOrder }: ChatProps) {
  return (
    <>
      <div className="relative overflow-hidden flex-[1_0_auto] before:absolute before:top-0 before:start-1/2 before:bg-[url('./assets/light.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('./assets/dark.svg')]">
        <div className='max-w-4xl px-4 pt-4 sm:px-6 lg:px-8 sm:pt-8 lg:pt-14 mx-auto'>
          <ul
            className='space-y-5 py-2 max-h-[600px] overflow-y-auto
  					[&::-webkit-scrollbar]:w-0
  					[&::-webkit-scrollbar-track]:rounded-full
  				[&::-webkit-scrollbar-track]:bg-gray-100
  					[&::-webkit-scrollbar-thumb]:rounded-full
  				[&::-webkit-scrollbar-thumb]:bg-gray-300
  				dark:[&::-webkit-scrollbar-track]:bg-slate-700
  				dark:[&::-webkit-scrollbar-thumb]:bg-slate-500'
          >
            {/* Chat Bubble */}
            <li className='max-w-4xl  mx-auto flex gap-x-2 sm:gap-x-4'>
              <span className='flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full border border-gray-200 dark:bg-slate-900 dark:border-gray-700'>
                <SmallLogoIcon className='text-gray-800 dark:text-gray-200' />
              </span>

              <div className='bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700'>
                <h2 className='font-medium text-gray-800 dark:text-white'>
                  How can we help?
                </h2>
                <div className='space-y-1.5'>
                  <p className='mb-1.5 text-sm text-gray-800 dark:text-white'>
                    You can ask questions like:
                  </p>
                  <ul className='list-disc list-outside space-y-1.5 ps-3.5'>
                    <li className='text-sm text-gray-800 dark:text-white'>
                      Can you explain Aleo's blockchain technology?
                    </li>

                    <li className='text-sm text-gray-800 dark:text-white'>
                      What tools and programming languages does Aleo support?
                    </li>

                    <li className='text-sm text-gray-800 dark:text-white'>
                      What are private smart contracts, and how do they operate
                      in Aleo?
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* End Chat Bubble */}

            {/* Chat Bubble */}

            <li className='max-w-2xl ms-auto flex justify-end gap-x-2 sm:gap-x-4'>
              <div className='grow text-end space-y-3'>
                <div className='inline-block bg-blue-600 rounded-lg p-4 shadow-sm'>
                  <p className='text-sm text-white'>
                    Can you explain Aleo's blockchain technology?
                  </p>
                </div>
              </div>

              <span className='flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full  bg-blue-600 '>
                <UserIcon className='text-gray-200' />
              </span>
            </li>

            <li className='max-w-4xl  mx-auto flex gap-x-2 sm:gap-x-4'>
              <span className='flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full border border-gray-200 dark:bg-slate-900 dark:border-gray-700'>
                <SmallLogoIcon className='text-gray-800 dark:text-gray-200' />
              </span>

              <div className='bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-slate-900 dark:border-gray-700'>
                <p className='text-sm text-gray-800 dark:text-white'>
                  {`Aleo's blockchain technology is being developed through incentivized testnets, with the latest being testnet2. The purpose of these testnets is to validate the technical architecture and security of the blockchain in a realistic setting. The goal is to support fully private, decentralized applications by ensuring the protocol works as intended, maximizing participation in mining nodes, and distributing tokens fairly among all participants, not just large-scale miners.\n\nIn the testnet2, participants can earn block rewards that will be redeemable for Aleo credits at the mainnet launch. The testnet runs for ten weeks and uses a quadratic formula to determine rewards for miners. This formula ensures fair distribution of rewards to all participants, with additional rewards for the top 100 miners who make significant contributions to the network.`}
                </p>
              </div>
            </li>

            {/* End Chat Bubble */}
          </ul>
        </div>
      </div>
      <div className=' bg-white  pt-2 pb-3 sm:pt-4 sm:pb-6 dark:bg-slate-900'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center mb-3'>
            <button
              type='button'
              className='inline-flex justify-center items-center gap-x-2 rounded-lg font-medium text-gray-800 hover:text-blue-600 text-xs sm:text-sm dark:text-gray-200 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            >
              <svg
                className='flex-shrink-0 size-4'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              >
                <path d='M5 12h14' />
                <path d='M12 5v14' />
              </svg>
              New chat
            </button>

            <button
              type='button'
              className='py-1.5 px-2 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
              onClick={() => setOrder('landing')}
            >
              <svg
                className='size-3'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z' />
              </svg>
              Stop generating
            </button>
          </div>

          {/* Input */}
          <div className='relative'>
            <textarea
              className='resize-none p-4 pb-12 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
              placeholder='Ask me anything...'
            ></textarea>

            {/* Toolbar */}
            <div className='absolute bottom-px inset-x-px p-2 rounded-b-md bg-white dark:bg-slate-900'>
              <div className='flex justify-between items-center'>
                {/* Button Group */}
                <div className='flex items-center'>
                  {/* Mic Button */}
                  <button
                    type='button'
                    className='inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  >
                    <svg
                      className='flex-shrink-0 size-4'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <rect width='18' height='18' x='3' y='3' rx='2' />
                      <line x1='9' x2='15' y1='15' y2='9' />
                    </svg>
                  </button>
                  {/* End Mic Button */}

                  {/* Attach Button */}
                  <button
                    type='button'
                    className='inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  >
                    <svg
                      className='flex-shrink-0 size-4'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path d='m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48' />
                    </svg>
                  </button>
                  {/* End Attach Button */}
                </div>
                {/* End Button Group */}

                {/* Button Group */}
                <div className='flex items-center gap-x-1'>
                  {/* Mic Button */}
                  <button
                    type='button'
                    className='inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  >
                    <svg
                      className='flex-shrink-0 size-4'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path d='M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z' />
                      <path d='M19 10v2a7 7 0 0 1-14 0v-2' />
                      <line x1='12' x2='12' y1='19' y2='22' />
                    </svg>
                  </button>
                  {/* End Mic Button */}

                  {/* Send Button */}
                  <button
                    type='button'
                    className='inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                  >
                    <svg
                      className='flex-shrink-0 size-3.5'
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      viewBox='0 0 16 16'
                    >
                      <path d='M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z' />
                    </svg>
                  </button>
                  {/* End Send Button */}
                </div>
                {/* End Button Group */}
              </div>
            </div>
            {/* End Toolbar */}
          </div>
          {/* End Input */}
        </div>
      </div>
    </>
  )
}
