import Layout from '../components/layout'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_TITLE } from '../lib/constants'
import Container from '../components/container'
import { NextSeo } from 'next-seo'

export default function my404() {
  return (
    <Layout home layoutFormat='fullwidth'>
      <NextSeo
        title={'404 Bulunamadı - ' + SITE_TITLE}
        description='bulunamadı'
        canonical={process.env.url + '404'}
        noindex={true}
      />
      <Container>
        <div className='w-full py-2 lg:py-10 p-0 text-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='h-24 w-24 text-red-600 mx-auto'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
            />
          </svg>

          <h1 className='text-3xl py-2 lg:py-5 text-strong'>
            404 - Sayfa Bulunamadı
          </h1>
          <div>Aradığınız sayfa bulunamadı.</div>
        </div>
      </Container>
    </Layout>
  )
}
