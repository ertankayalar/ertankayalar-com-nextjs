import Link from 'next/link'
import Layout from '../components/layout'
import { NextSeo } from 'next-seo'
import Button from '../components/button'
import Container from '../components/container'
import Hero from '../components/hero'

export default function Home() {
  return (
    <Layout>
      <NextSeo
        title='Fullstack Web Developer - Ertan Kayalar'
        description='React, Django, Symfony, Laravel Web Developer'
        canonical={process.env.url}
      />

      <Hero />
      <Container>
        <div className='w-full text-gray-600 px-2'>
          {/* <div className='container mx-auto'>
          <div className='text-center font-bold my-10 border-b-2'>
            <span className='text-lg md:text-2xl'>Merhaba, ben </span>
            <h1 className='text-4xl  text-accent pb-10 md:text-5xl'>
              Ertan Kayalar
            </h1>
            <p className='text-3xl text-gray-700 md:text-4xl pb-10'>
              web sitesi geliştirmeyi seviyorum
            </p>
          </div>
        </div> */}

          <div className='w-full py-5 text-lg md:text-lg text-center md:text-left'>
            <p className='py-5 '>
              Full-stack web developer olarak Denizli'de çalışıyorum.
            </p>
            <p className='py-2'>
              Son zamanlarda Javascript (Node.js, React.js, Next.js) ve Python
              (Django) üzerine odaklandım. Ancak uzun yıllarda PHP (Laravel,
              Symfony ve WordPress) üzerine çalıştım.
            </p>
          </div>

          <div className='text-lg md:text-lg my-3 text-center md:text-left'>
            Eğer web sitesi ihtiyaçlarınız varsa benimle{' '}
            <Link href='/iletisim/'>
              <a className='text-accent hover:text-primary'>iletişim</a>
            </Link>{' '}
            kurabilir veya{' '}
            <Link href='/hakkimda'>
              <a className='text-accent hover:text-primary'>hakkımda</a>
            </Link>{' '}
            biraz daha fazla bilgi edinebilirsiniz.
          </div>

          <div className='w-full text-center  bg-gradient-to-b  from-gray-100 to-gray-50 py-10 rounded-lg border my-20'>
            <svg
              className='w-12 h-12 mx-auto text-strong'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
              ></path>
            </svg>
            <h2 className='text-3xl font-bold'>Dijital Pazarlama Kitabı</h2>
            <div className='py-10'>
              <p>
                Dijital pazarlamayı öğrenmek isteyenler için ücretsiz başlangıç
                kitabı
              </p>
            </div>
            <Button href='https://pazarlama.info.tr'>
              pazarlama.info.tr
              <svg
                className='w-6 h-6 inline-block m-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                ></path>
              </svg>
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
