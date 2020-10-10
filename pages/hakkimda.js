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

      <article className='prose-lg'>
        <h1>Merhaba</h1>
        <p>Ben Ertan, 22 yıldır web developer olarak Denizli'de çalışıyorum.</p>

        <p>
          Temel olarak HTML, CSS, Javascript kullanıyorum. React.js, Node,
          Express, Gatsby, Next.js, Python ve Django üzerine odaklandım.
        </p>
        <p>
          Ayrıca, PHP, Laravel, Symfony, MySQL, WordPress ile uzun yıllar web
          sitesi geliştirdim.
        </p>
        <p>
          <Link href='https://pazarlama.info.tr'>
            <a>Dijital Pazarlama</a>
          </Link>{' '}
          hakkında çevrim içi kitap yazdım.
        </p>
        <h2>Biraz daha detay</h2>
        <p></p>
      </article>
    </Layout>
  )
}
