import Head from 'next/head'
import Layout from '../components/layout'
import { getAllPostIds, getPostData } from '../lib/posts'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'




export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className="text-xl bg-indigo-600 text-indigo-100 px-5 py-5">
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  }

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
      paths,
      fallback: false
    }
  }
  

  export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }

  
  
  