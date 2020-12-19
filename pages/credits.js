import Layout from '../components/layout'
import { NextSeo } from 'next-seo'
import { SITE_TITLE } from '../lib/constants'
import Container from '../components/container'
import ExtLink from '../components/extlink'
import Content from '../components/content'

export default function credits() {
  return (
    <Layout home layoutFormat='fullwidth'>
      <NextSeo
        title={'Credits - ' + SITE_TITLE}
        description='Credits'
        canonical={process.env.url + 'credits'}
        noindex={true}
      />

      <Container>
        <div className='w-full text-gray-600 mx-2'>
          <h1 className='text-3xl mt-10'>Credits</h1>
          <Content>
            <ExtLink className='py-1 block' href='https://tailwindcss.com'>
              Tailwindcss
            </ExtLink>
            <ExtLink className='py-1 block' href='https://nextjs.org'>
              NextJS
            </ExtLink>
            <ExtLink className='py-1 block' href='https://reactjs.org'>
              ReactJS
            </ExtLink>
            <ExtLink className='py-1 block' href='https://fontawesome.com'>
              Fontawesome
            </ExtLink>
            <ExtLink className='py-1 block' href='https://heroicons.com'>
              Heroicons
            </ExtLink>
          </Content>
        </div>
      </Container>
    </Layout>
  )
}
