import Image from 'next/image'

export default function Hero() {
  return (
    <div className='w-full bg-gray-50 bg-gradient-to-br from-gray-50 to-gray-200 py-10 lg:py-20'>
      <div className='flex flex-wrap max-w-screen-sm mx-auto'>
        <div className='w-full md:w-1/4 my-auto  flex content-center justify-center'>
          <Image
            src='/assets/author.jpg'
            alt='ertan kayalar'
            className='rounded mt-20'
            width={150}
            height={148}
          />
        </div>

        <div className='w-full md:w-3/4 md:pl-2 lg:py-10 text-center sm:text-left'>
          <span className='text-lg md:text-xl'>Merhaba, ben </span>
          <h1 className='text-3xl py-2 font-bold text-strong pb-5 md:text-3xl'>
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
