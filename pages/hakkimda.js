import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Content from '../components/content'
import Layout from '../components/layout'

export default function about() {
  return (
    <Layout>
      <NextSeo
        title='Ertan Kayalar Hakkında - Fullstack Web Developer'
        description='Yazılım geliştirici Ertan Kayalar hakkında - Fullstack Web Developer, React, Django, Symfony ve Laravel PHP Framework developer'
        canonical={process.env.url + 'hakkimda'}
      />
      <section className='w-full flex flex-col md:flex-row flex-wrap'>
        <div className='w-full md:w-1/3 flex content-center justify-center'>
          <div className='my-auto mx-auto'>
            <Image
              src='/assets/ek_2020_11_1v3_small.jpg'
              alt='ertan kayalar'
              width={250}
              height={400}
              className='rounded'
            />
          </div>
        </div>

        <div className='w-full md:w-2/3'>
          <article className='text-center sm:text-left'>
            <Content>
              <h1 className='py-3'>Merhaba</h1>

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
            </Content>
          </article>
        </div>
      </section>
    </Layout>
  )
}
