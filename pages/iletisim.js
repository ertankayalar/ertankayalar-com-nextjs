import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { SITE_TITLE } from '../lib/constants'
import Container from '../components/container'

export default function contact() {
  return (
    <Layout home layoutFormat='fullwidth'>
      <NextSeo
        title={'İletişim - ' + SITE_TITLE}
        description='Ertan Kayalar İletişim Sayfası'
        canonical={process.env.url + 'iletisim'}
        openGraph={{
          type: 'website',
          url: process.env.url + 'iletisim',
          title: 'Ertan Kayalar İletişim',
          description: 'Full-stack Web Developer Ertan Kayalar İletişim',
          images: [
            {
              url: process.env.url + 'assets/og-800x600.png',
              width: 800,
              height: 600,
              alt: 'Full-stack Web Developer Ertan Kayalar İletişim',
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
            <h1 className='text-3xl py-2 lg:py-5 text-strong'>Bana Ulaşın</h1>
            <div className='text-md lg:text-lg leading-7 lg:leading-10 text-gray-600'>
              <p>
                Benimle ilginiz iş, yazdığım içerikler veya konuşmak istediğiniz
                başka bir konu olsun, sizinle konuşmaktan memnun olurum.
              </p>

              <p className='py-2 lg:py-5'>
                <span className='font-bold'>Tercih ettiğim</span> iletişim yolu
                <Link
                  href='https://twitter.com/ertankayalar'
                  className='cursor-pointer'
                >
                  <a className='text-accent hover:text-accent-dark'>
                    <svg
                      aria-hidden='true'
                      focusable='false'
                      data-prefix='fab'
                      data-icon='twitter'
                      className='h-6 w-6 inline-block m-2'
                      role='img'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
                      ></path>
                    </svg>
                    Twitter
                  </a>
                </Link>{' '}
                veya{' '}
                <Link
                  href='mailto:ertan@ertankayalar.com'
                  className='cursor-pointer'
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
                    epostadır.
                  </a>
                </Link>
              </p>
            </div>
          </article>
        </div>
      </Container>
    </Layout>
  )
}
