import Head from 'next/head'
import PageHeader from './page-header'
import PageFooter from './page-footer'
export const siteTitle = 'Ertan Kayalar'

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

        <meta name='description' content='Ertan Kayalar Web Sitesi' />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <PageHeader siteTitle={siteTitle} />
      <main className='max-w-full md:max-w-screen-lg mx-auto py-5 xl:max-w-screen-lg px-5 pb-24 sm:pb-0 w-full flex-1 mb-24 sm:mb20 text-gray-700'>
        {children}
      </main>

      <PageFooter />
    </div>
  )
}
