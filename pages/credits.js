import Layout from '../components/layout'
import { NextSeo } from 'next-seo'
import { SITE_TITLE } from '../lib/constants'
import Container from '../components/container'
import ExtLink from '../components/extlink'

export default function credits() {
  return (
    <Layout home layoutFormat='fullwidth'>
      <NextSeo
        title={'Credits - ' + SITE_TITLE}
        description='Credits'
        canonical={process.env.url + 'credits'}
      />

      <Container>
        <div className='w-full text-gray-600 mx-2'>
          <h1 className='text-3xl my-10'>Credits</h1>
          <div className='text-md'>
            <ExtLink
              className='my-1 block text-accent hover:text-primary'
              href='https://tailwindcss.com'
            >
              Tailwindcss
            </ExtLink>
            <ExtLink
              className='my-1 block text-accent hover:text-primary'
              href='https://nextjs.org'
            >
              NextJS
            </ExtLink>
            <ExtLink
              className='my-1 block text-accent hover:text-primary'
              href='https://reactjs.org'
            >
              ReactJS
            </ExtLink>
            <ExtLink
              className='my-1 block text-accent hover:text-primary'
              href='https://fontawesome.com'
            >
              Fontawesome
            </ExtLink>
            <ExtLink
              className='my-1 block text-accent hover:text-primary'
              href='https://heroicons.com'
            >
              Heroicons
            </ExtLink>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
