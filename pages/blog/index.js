import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { getSortedPostsData } from '../../lib/posts'
import { SITE_TITLE } from '../../lib/constants'
import { NextSeo } from 'next-seo'

export default function Blog({ allPostsData }) {
  return (
    <Layout home>
      <NextSeo
        title={'Web Development Yazıları - ' + SITE_TITLE}
        description='Web sitesi geliştirme, girişimcilik ile ilgili yazılar'
        canonical={process.env.url + 'blog'}
      />
      <article className='my-5'>
        <h1 className='text-3xl text-gray-700'>Yazılar</h1>
        {allPostsData.map(({ id, title }) => (
          <div className='w-full' key={id}>
            <Link href='/[id]' as={`/${id}`}>
              <a>
                <h2 className='text-lg text-gray-700 my-5 hover:text-primary-700'>
                  {title}
                </h2>
              </a>
            </Link>
          </div>
        ))}
      </article>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
