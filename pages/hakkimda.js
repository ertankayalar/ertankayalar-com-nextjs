import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

import Layout from '../components/layout'
import PageTitle from '../components/page-title'
export default function about() {
  return (
    <Layout>
      <NextSeo
        title='Ertan Kayalar Hakkında - Fullstack Web Developer'
        description='Yazılım geliştirici Ertan Kayalar hakkında - Fullstack Web Developer, React, Django, Symfony ve Laravel PHP Framework developer'
        canonical={process.env.url + 'hakkimda'}
      />
      <section className='w-full flex flex-col md:flex-row '>
        <div className='w-full md:w-1/3  flex content-center justify-center'>
          <Image
            src='/assets/ek_2020_11_1v3_small.jpg'
            alt='ertan kayalar'
            className=' rounded'
            width='250'
            height='400'
          />
        </div>

        <div className='w-full md:w-2/3'>
          <article className='prose-sm lg:prose-lg  text-center sm:text-left'>
            <h1 className='text-center text-md md:text-left text-sm md:text-md py-5'>
              Merhaba
            </h1>

            <p>
              Ben Ertan, 22 yıldır web developer olarak Denizli'de çalışıyorum.
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
          </article>
        </div>
      </section>
    </Layout>
  )
}
