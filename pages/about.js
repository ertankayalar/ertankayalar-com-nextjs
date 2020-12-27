import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

import Layout from '../components/layout'
import Container from '../components/container'
import Expertise from '../components/expertise'

export default function about() {
  return (
    <Layout>
      <NextSeo
        title='Ertan Kayalar  - Full-stack Web Developer in Turkey'
        description='About fFull-stack web developer Ertan Kayalar - Full-stack Web Development expertize of  React, Django, Symfony ve Laravel PHP Framework developer'
        canonical={process.env.url + 'about'}
        openGraph={{
          type: 'website',
          url: process.env.url + 'about',
          title: 'About Ertan Kayalar',
          description: 'About full-stack web developer Ertan Kayalar',
          images: [
            {
              url: process.env.url + 'assets/og-800x600.png',
              width: 800,
              height: 600,
              alt: 'About Ertan Kayalar',
            },
          ],
        }}
      />
      <Container>
        <section className='w-full flex flex-col md:flex-row flex-wrap my-3 md:my-5 lg:my-10'>
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
            <article className='text-center sm:text-left ml-0 md:ml-2 lg:ml-0'>
              <h1 className='text-3xl py-5 text-strong'>
                Hi, I'm Ertan Kayalar
              </h1>
              <div className='text-base text-gray-600 leading-7'>
                <p>
                  I have been working as a full-stack web developer for more
                  than 20 years.
                </p>

                <p className='my-5'>
                  I'm doing freelance work based in Turkey, but I do work
                  remotely for international clients.
                </p>
                <p>
                  I love web development. I'm passionate to build useful
                  products for people.
                </p>
                <p>
                  As a forever student, I have been learned a lot stuff around
                  web development business. I created a web site about{' '}
                  <Link href='https://pazarlama.info.tr'>
                    <a className='text-accent hover:text-primary'>
                      Digital Marketing{' '}
                    </a>
                  </Link>
                  for turkish people. I'm still learning new ideas about
                  Startup, marketing and of course new technologies about web
                  and mobile development.
                </p>
              </div>
            </article>
          </div>
        </section>
        <Expertise />
      </Container>
    </Layout>
  )
}
