import Link from 'next/link'

export default function PageFooter() {
  return (
    <footer>
      <ul className='bottom-navigation fixed bottom-0 left-0 z-20 bg-gray-100 text-gray-600 w-full flex items-center justify-evenly lg:hidden h-20 text-xs md:text-md lg:text-lg'>
        <li className='font-semibold flex flex-col items-center justify-center flex-no-wrap transition duration-500 ease-out'>
          <Link href='/'>
            <a className='flex flex-col items-center justify-center flex-no-wrap transition duration-500 ease-out hover:text-primary'>
              <svg
                className='w-6 h-6 text-accent'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                ></path>
              </svg>

              <div>Home</div>
            </a>
          </Link>
        </li>
        <li className='font-semibold flex flex-col items-center justify-center flex-no-wrap transition duration-500 ease-out'>
          <Link href='/blog'>
            <a className='flex flex-col items-center justify-center flex-no-wrap transition duration-500 ease-out hover:text-primary'>
              <svg
                className='w-6 h-6 text-accent'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                ></path>
              </svg>
              <div>Blog</div>
            </a>
          </Link>
        </li>
        <li className='font-semibold flex flex-col items-center justify-center flex-no-wrap transition duration-500 ease-out'>
          <Link href='/about'>
            <a className='flex flex-col items-center justify-center flex-no-wrap transition duration-500 ease-out hover:text-primary'>
              <svg
                className='w-6 h-6 text-accent'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                ></path>
              </svg>
              <div>About</div>
            </a>
          </Link>
        </li>
        <li className='font-semibold flex flex-col items-center justify-center flex-no-wrap transition duration-500 ease-out'>
          <Link href='/uses'>
            <a className='flex flex-col items-center justify-center flex-no-wrap transition duration-500 ease-out hover:text-primary'>
              <svg
                className='w-6 h-6 text-accent'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                ></path>
              </svg>
              <div>Uses</div>
            </a>
          </Link>
        </li>
        <li className='font-semibold flex flex-col items-center justify-center flex-no-wrap transition duration-500 ease-out'>
          <Link href='/contact'>
            <a className='flex flex-col items-center justify-center flex-no-wrap transition duration-500 ease-out hover:text-primary'>
              <svg
                className='w-6 h-6 text-accent'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                ></path>
              </svg>
              <div>Contact Me</div>
            </a>
          </Link>
        </li>
      </ul>

      <div className='w-full text-gray-600 py-10 border-t mt-20 mb-20'>
        <div className='container text-center text-sm md:text-md mx-auto '>
          <svg
            className='w-6 h-6 inline-block m-2'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
            ></path>
          </svg>{' '}
          with{' '}
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='heart'
            className='svg-inline--fa fa-heart w-6 h-6 inline-block m-2 text-red-600'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path
              fill='currentColor'
              d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'
            ></path>
          </svg>{' '}
          by Ertan Kayalar &copy; 2016 - {new Date().getFullYear()}. All rights
          reserved.
        </div>
      </div>
    </footer>
  )
}
