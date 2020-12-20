import Image from 'next/image'

export default function Hero() {
  return (
    <div className='w-full bg-gray-50 bg-gradient-to-br from-gray-50 to-gray-200 py-10 lg:py-20'>
      <div className='flex flex-wrap max-w-screen-sm mx-auto'>
        <div className='w-full md:w-1/4 flex flex-wrap content-center justify-center'>
          <img
            src='/assets/ertan-kayalar-21-small-150x150.jpg'
            alt='ertan kayalar'
            className='rounded'
          />
        </div>

        <div className='w-full pt-10 md:pt-0 md:w-3/4 md:pl-2 lg:py-10 text-center sm:text-left text-strong'>
          <span className='text-lg md:text-xl'>Merhaba, ben </span>
          <h1 className='text-3xl py-2 font-bold  pb-5 md:text-3xl'>
            Ertan Kayalar
          </h1>
          <p className='text-3xl text-gray-600 md:text-2xl'>
            web sitesi geliştirmeyi seviyorum
          </p>
        </div>
      </div>
    </div>
  )
}
