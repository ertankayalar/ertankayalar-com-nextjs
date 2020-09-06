import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import DateFormater from '../../components/date-formater'
import AuthorPostInfo from '../../components/author-post-info'




export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
          <title ey="title">{postData.title} - { siteTitle }</title>
        </Head>
        <article className="w-full mt-10 mb-32">

        { postData.coverImage && (
        <img src={postData.coverImage} alt={ postData.title } class="rounded object-cover object-center mx-auto" />

        )}
        
        <h1 className="text-3xl text-gray-600">{postData.title}</h1>
        <div class="text-gray-600 font-normal text-sm">
        <DateFormater dateString={postData.date} />
                           
                        </div>
  
          <div className="post-content prose-lg  pt-5 pb-10 text-gray-600 overflow-auto" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

          <AuthorPostInfo />
          
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

  
  
  