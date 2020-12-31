import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { SITE_TITLE } from '../lib/constants'
import Container from '../components/container'
import Social from '../components/social'

export default function contact() {
  return (
    <Layout home layoutFormat='fullwidth'>
      <NextSeo
        title={'Contact - ' + SITE_TITLE}
        description='Ertan Kayalar contact page'
        canonical={process.env.url + 'contact'}
        openGraph={{
          type: 'website',
          url: process.env.url + 'contact',
          title: 'Ertan Kayalar Contact',
          description: 'Full-stack Web Developer Ertan Kayalar Contact Page',
          images: [
            {
              url: process.env.url + 'assets/og-800x600.png',
              width: 800,
              height: 600,
              alt: 'Full-stack Web Developer Ertan Kayalar Contact',
            },
          ],
        }}
      />

      <Container>
        <div className='flex flex-col sm:flex-row justify-center  space-x-0 sm:space-x-12 py-2 lg:py-10 items-start p-0'>
          <div className='w-full md:w-1/4 my-auto  flex content-center justify-center  md:justify-end'>
            <Image
              src='/assets/author.jpg'
              alt='ertan kayalar'
              className='rounded'
              width={150}
              height={148}
            />
          </div>
          <article className='w-full md:w-3/4 lg:py-10 text-center sm:text-left  '>
            <h1 className='text-2xl md:text-3xl py-3 lg:py-3 text-strong'>
              Contact Me
            </h1>
            <div className='text-md lg:text-lg leading-7 px-2 md:px-0 text-gray-600'>
              <p>
                I will be happy to hear you whatever you want to talk about that
                web development, business or my posts.
              </p>

              <p className='py-2 lg:py-3'>
                My <span className='font-bold'>primary</span> choice is{' '}
                <Link
                  href='mailto:ertan@ertankayalar.com'
                  className='cursor-pointer '
                >
                  <a className='text-accent hover:text-accent-dark'>
                    <svg
                      className='h-6 w-6 inline-block'
                      fill='none'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'></path>
                    </svg>{' '}
                    email.
                  </a>
                </Link>
              </p>

              <p>But you can follow on social media and send message:</p>
              <Social />
              {/* <p className=' w-full flex items-center  justify-center md:justify-start my-1  text-sm'>
                <Link href='https://twitter.com/ertankayalar/'>
                  <a className='block mx-2 text-primary hover:text-accent'>
                    <svg
                      className='fill-current text-primary-800 hover:text-primary-300'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z'
                      />
                    </svg>
                  </a>
                </Link>
                <Link href='https://www.instagram.com/ertan.kayalar/'>
                  <a className='block mx-2 text-primary hover:text-accent'>
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-icon='instagram'
                      className='fill-current text-primary-800 hover:text-primary-300'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                      ></path>
                    </svg>
                  </a>
                </Link>
                <Link href='https://www.linkedin.com/in/ertankayalar/'>
                  <a className='block mx-2 text-primary hover:text-accent'>
                    <svg
                      className='fill-current text-primary-800 hover:text-primary-300'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z'
                      />
                    </svg>
                  </a>
                </Link>
                <Link href='https://github.com/ertankayalar'>
                  <a className='block mx-2 text-primary hover:text-accent'>
                    <svg
                      className='fill-current text-primary-800 hover:text-primary-300'
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z'
                      />
                    </svg>
                  </a>
                </Link>
              </p> */}
            </div>
          </article>
        </div>
      </Container>
    </Layout>
  )
}
