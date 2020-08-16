import Head from "next/head";
import Link from "next/link";
import PageHeader from "./PageHeader"
import PageFooter from './PageFooter'
const name = "Ertan Kayalar";
export const siteTitle = "Ertan Kayalar Blog";

export default function Layout({ 
  children, 
  mainClassName = 'container mx-auto prose-lg py-5'
  }) {
  return (
    <div className="main_container">
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
      <PageHeader />
        <main className={mainClassName}>{children}</main>
      
      <PageFooter />
    </div>
  );
}
