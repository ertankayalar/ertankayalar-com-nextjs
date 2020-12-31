import Link from 'next/link'
import Image from 'next/image'
import Social from './social'

export default function Author() {
  return (
    <div className='post-author flex flex-wrap  bg-gray-100 py-6 px-4 rounded-lg items-center'>
      <div className='w-full md:w-1/5 flex content-center justify-center'>
        <Image
          className='rounded-full mx-auto'
          src='/assets/author.jpg'
          alt='ertan kayalar'
          width='150'
          height='150'
        />
      </div>
      <div className='w-full md:w-4/5 py-3 px-2 text-strong-dark text-center md:text-left'>
        <p className='text-2xl font-bold'>Ertan Kayalar</p>

        <p className='text-md font-light'>Full-stack Web Developer</p>
        <p className='my-5'>
          Ertan writing code for 30 years. Most interested in ReactJs, Django,
          Symfony and Laravel.
        </p>

        <Social />
      </div>
    </div>
  )
}
