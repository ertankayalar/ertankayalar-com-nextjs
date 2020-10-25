import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import PageTitle from '../components/page-title'
export default function about() {
  return (
    <Layout>
      <Head>
        <title>Hakkımda - {siteTitle}</title>
      </Head>

      <section className='w-full flex flex-col md:flex-row '>
        <div className='w-full md:w-1/3'>
          <img
            src='/assets/ek-medium-19v1-225x300.jpg'
            alt='ertan kayalar'
            className='mx-auto shadow-md'
          />
        </div>

        <div className='w-full md:w-2/3'>
          <article className='prose-sm lg:prose-lg'>
            <div>
              <h1 className='text-center text-md md:text-left text-sm md:text-md'>
                Merhaba
              </h1>
              <p>
                Ben Ertan, 22 yıldır web developer olarak Denizli'de
                çalışıyorum.
              </p>

              <p>
                Temel olarak HTML, CSS, Javascript kullanıyorum. React.js, Node,
                Express, Gatsby, Next.js, Python ve Django üzerine odaklandım.
              </p>
              <p>
                Ayrıca, PHP, Laravel, Symfony, MySQL, WordPress ile uzun yıllar
                web sitesi geliştirdim.
              </p>
              <p>
                <Link href='https://pazarlama.info.tr'>
                  <a>Dijital Pazarlama</a>
                </Link>{' '}
                hakkında çevrim içi kitap yazdım.
              </p>
              <p></p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}
