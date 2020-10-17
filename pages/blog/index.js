import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import { getSortedPostsData } from '../../lib/posts'

export default function Blog({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <article className='my-5'>
        <h1 className='text-3xl text-gray-700'>Yazılar</h1>
        {allPostsData.map(({ id, title }) => (
          <div className='w-full' key={id}>
            <Link href='/blog/[id]' as={`/blog/${id}`}>
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
