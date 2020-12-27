import Link from 'next/link'
import Layout from '../components/layout'
import { NextSeo } from 'next-seo'
import Button from '../components/button'
import Container from '../components/container'
import Hero from '../components/hero'
import Expertise from '../components/expertise'

export default function Home() {
  return (
    <Layout>
      <NextSeo
        title='Full-stack Web Developer Ertan Kayalar in Turkey'
        description='Full-stack Web Developer, expertize of React, Django, Symfony, Laravel'
        canonical={process.env.url}
        openGraph={{
          type: 'website',
          url: process.env.url,
          title: 'Ertan Kayalar',
          description: "Full-stack Web Developer Ertan Kayalar's web site",
          images: [
            {
              url: process.env.url + 'assets/og-800x600.png',
              width: 800,
              height: 600,
              alt: 'Full-stack Web Developer Ertan Kayalar',
            },
          ],
        }}
      />

      <Hero />
      <div className='w-full bg-primary-dark text-gray-50'>
        <Container>
          <div className='w-full flex flex-row flex-wrap py-5 '>
            <div className='w-full md:w-2/12 flex justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='h-12 w-12 md:h-28 md:w-28 text-strong-lightest opacity-40 mx-auto'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                />
              </svg>
            </div>
            <div className='w-full md:w-10/12 text-base py-3 flex flex-wrap content-center justify-center md:justify-start'>
              <p className='mb-10 text-center md:text-left text-md md:text-lg'>
                I am a{' '}
                <span className='text-accent-light font-bold'>
                  full-stack web developer
                </span>{' '}
                and{' '}
                <span className='text-accent-light font-bold'>
                  software consultant
                </span>{' '}
                based in Turkey between Asia and Europe. I can do remote work
                for any place in the world.
              </p>

              <Button href='/contact' className='md:ml-0   '>
                Contact Me
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <Expertise />
      </Container>
    </Layout>
  )
}
