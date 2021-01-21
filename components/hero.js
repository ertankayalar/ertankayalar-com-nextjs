import Image from 'next/image'

export default function Hero() {
  return (
    <div className='w-full bg-gray-50 bg-gradient-to-b from-white to-gray-100 py-10 lg:py-16'>
      <div className='flex flex-wrap max-w-screen-sm mx-auto'>
        <div className='w-full md:w-1/4 flex flex-wrap content-center justify-center'>
          <img
            src='/assets/ertan-kayalar-21-small-150x150.jpg'
            alt='ertan kayalar'
            className='rounded-full'
          />
        </div>

        <div className='w-full pt-10 md:pt-0 md:w-3/4 md:pl-2 lg:py-3 text-center sm:text-left text-strong'>
          <span className='text-lg md:text-xl'>Hello, I'm </span>
          <h1 className='text-3xl py-2 font-bold  pb-5 md:text-3xl'>
            Ertan Kayalar
          </h1>
          <p className='text-3xl text-gray-600 md:text-2xl'>
            I
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='heart'
              className=' w-6 h-6 inline-block m-2 text-red-600 animate-pulse'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z'
              ></path>
            </svg>
            web development
          </p>
        </div>
      </div>
    </div>
  )
}
