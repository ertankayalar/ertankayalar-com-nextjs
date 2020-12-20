import Head from 'next/head'
import Header from './header'
import Footer from './footer'
import { SITE_TITLE } from '../lib/constants'

export default function Layout({ children }) {
  return (
    <div className='main_wrapper'>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <Header siteTitle={SITE_TITLE} />
      <div className='min-h-full'>
        <main>{children}</main>
      </div>

      {/* <main className='max-w-full md:max-w-screen-lg mx-auto py-5 xl:max-w-screen-lg px-5 pb-24 sm:pb-0 w-full  mb-24 sm:mb20 text-gray-700'>
        {children}
      </main> */}

      <Footer />
    </div>
  )
}
