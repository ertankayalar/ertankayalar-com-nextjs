import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='container mx-auto'>
        <div className='text-center'>
          <h1 className='text-3xl text-primary-800 font-bold'>
            Merhaba, ben Ertan Kayalar
          </h1>
          <p className='text-3xl text-primary-800 font-bold'>
            ve web sitesi geliştirmeyi seviyorum
          </p>
        </div>
        <div>
          Full-stack web developer olarak Denizli'de çalışıyorum. Son zamanalrda
          Javascript (Node.js, React.js, Next.js) ve Pyhon (Django) üzerine
          odaklandım. Ancak uzun yıllarda PHP (Laravel, Symfony ve WordPress)
          üzerine çalıştım.
        </div>
        <div>
          Eğer web sitesi ihtiyaçlarınız varsa benimle{' '}
          <Link href='/iletisim/'>
            <a>iletişim</a>
          </Link>{' '}
          kurabilir veya{' '}
          <Link href='/hakkimda'>
            <a>hakkımda</a>
          </Link>{' '}
          biraz daha fazla bilgi edinebilirsiniz.
        </div>
      </main>
    </Layout>
  )
}
