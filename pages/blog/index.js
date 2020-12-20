import Link from 'next/link'
import Layout from '../../components/layout'
import { getSortedPostsData } from '../../lib/posts'
import { SITE_TITLE } from '../../lib/constants'
import { NextSeo } from 'next-seo'
import Container from '../../components/container'

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <NextSeo
        title={'Web Development Yazıları - ' + SITE_TITLE}
        description='Web sitesi geliştirme, girişimcilik ile ilgili yazılar'
        canonical={process.env.url + 'blog'}
        openGraph={{
          type: 'website',
          url: process.env.url + 'blog',
          title: 'Ertan Kayalar Blog',
          description: 'Ertan Kayalar Blog Yazıları',
          images: [
            {
              url: process.env.url + 'assets/og-800x600.png',
              width: 800,
              height: 600,
              alt: 'Ertan Kayalar Blog Yazıları',
            },
          ],
        }}
      />
      <Container>
        <article className='px-2 my-2 lg:my-5'>
          <h1 className='text-2xl lg:text-3xl py-3 lg:py-5 text-strong'>
            Yazılar
          </h1>
          {allPostsData.map(({ id, title }) => (
            <div className='w-full' key={id}>
              <Link href='/[id]' as={`/${id}`}>
                <a>
                  <h2 className='text-md lg:text-lg text-gray-600 my-3 lg:my-5 hover:text-accent'>
                    {title}
                  </h2>
                </a>
              </Link>
            </div>
          ))}
        </article>
      </Container>
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
