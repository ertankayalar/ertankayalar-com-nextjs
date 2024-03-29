import Layout from '../components/layout'
import DateFormater from '../components/date-formater'
import Author from '../components/author'
import Container from '../components/container'
import { NextSeo } from 'next-seo'
import { SEO_DESCRIPTION } from '../lib/constants'
import { SITE_TITLE } from '../lib/constants'
import { getAllPostIds, getPostData } from '../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      <NextSeo
        title={postData.title + ' - ' + SITE_TITLE}
        description={
          postData.SeoDescription ? postData.SeoDescription : SEO_DESCRIPTION
        }
        canonical={process.env.url + postData.id}
        openGraph={{
          title: postData.title + ' - ' + SITE_TITLE,
          description: postData.SeoDescription
            ? postData.SeoDescription
            : SEO_DESCRIPTION,
          url: process.env.url + postData.id,
          type: 'article',
          article: {
            publishedTime: postData.date,
            //modifiedTime: '2018-01-21T18:04:43Z',
            section: 'blog',
            authors: [process.env.url + 'hakkimda'],
          },
          images: [
            {
              url: process.env.url + 'assets/og-850x650.png',
              width: 850,
              height: 650,
              alt: postData.title,
            },
          ],
        }}
      />
      <Container>
        <article className='w-full mt-10 mb-32 px-2'>
          {postData.coverImage && (
            <img
              src={postData.coverImage}
              alt={postData.title}
              class='rounded object-cover object-center mx-auto'
            />
          )}

          <h1 className='text-3xl text-gray-800 mt-10 mb-5'>
            {postData.title}
          </h1>
          <div class='text-gray-600 font-normal text-xs'>
            <DateFormater dateString={postData.date} />
          </div>

          <div
            className='prose prose-sm w-full md:prose md:max-w-full lg:prose-lg lg:max-w-full pt-5 pb-10 text-gray-700 overflow-auto post-content '
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />

          <Author />
        </article>
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
