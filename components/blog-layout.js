import Head from "next/head";
import Link from "next/link";
import PageHeader from "./page-header"
import PageFooter from './page-footer'
import Sidebar from './sidebar'


export const siteTitle = "Ertan Kayalar";


export default function Layout({ 
  children
  }) {
  return (
    <div className="main_wrapper">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="NextJS boilerplate" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <PageHeader siteTitle={siteTitle}/>
        <main className="container mx-auto py-4">
        <div class="grid grid-cols-6 gap-4">
                  <div class="main col-span-4 bg-white py-2 px-3">
                  {children}
                  </div>
        <div class="sidebar col-span-2 bg-white">

        <Sidebar />

        </div>
        </div>

        </main>
      
      <PageFooter />
    </div>
  );
}
