import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

export default function contact() {
  return (
    <Layout home layoutFormat='fullwidth'>
      <Head>
        <title>Kullandığım Teknolojiler - {siteTitle}</title>
      </Head>

      <article className='prose-sm lg:prose-lg'>
        <h1>Kullandığım Teknolojiler</h1>

        <p className='text-lg font-normal'>
          Bazen bana hangi teknolojileri kullandığımı soruyorlar. Ben de
          kullandıklarımı burada özetlemek istedim.
        </p>

        <div className='w-full py-4'>
          <h2 className='text-2xl font-bold text-light-primary mb-2 mt-8'>
            Editör{' '}
            <svg
              class='w-6 h-6 inline-block'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
              ></path>
            </svg>
          </h2>

          <ul className='text-light-secondary pl-4 list-disc ml-5'>
            <li>
              Code Editör{' ~ '}
              <Link href='https://code.visualstudio.com'>
                <a className='text-light-accent font-bold border-transparent border-b-2 hover:border-light-accent  border-b-light-accent  transition duration-500 ease-in-out'>
                  VS Code
                </a>
              </Link>
            </li>

            <li>
              Code Editör Teması{' ~ '}
              <Link href='https://marketplace.visualstudio.com/items?itemName=teabyii.ayu'>
                <a className='text-light-accent font-bold border-transparent border-b-2 hover:border-light-accent  border-b-light-accent  transition duration-500 ease-in-out'>
                  Ayu Mirage
                </a>
              </Link>
            </li>
            <li>
              Code Editör Font{' ~ '}
              <Link href='https://github.com/microsoft/cascadia-code/releases'>
                <a className='text-light-accent font-bold border-transparent border-b-2 hover:border-light-accent  border-b-light-accent  transition duration-500 ease-in-out'>
                  Cascadia Code
                </a>
              </Link>
            </li>
            <li>
              İkinci Kod Editörü {' ~ '}
              <Link href='https://www.sublimetext.com/blog/articles/sublime-text-3-point-0'>
                <a className='text-light-accent font-bold border-transparent border-b-2 hover:border-light-accent  border-b-light-accent  transition duration-500 ease-in-out'>
                  Sublime Text 3
                </a>
              </Link>
            </li>
            <li>
              Markdown Editörü {' ~ '}
              <Link href='https://typora.io/'>
                <a className='text-light-accent font-bold border-transparent border-b-2 hover:border-light-accent  border-b-light-accent  transition duration-500 ease-in-out'>
                  Typora
                </a>
              </Link>
            </li>
            <li>
              Console{' ~ '}
              <Link href='https://gnunn1.github.io/tilix-web/'>
                <a className='text-light-accent font-bold border-transparent border-b-2 hover:border-light-accent  border-b-light-accent  transition duration-500 ease-in-out'>
                  Tilix
                </a>
              </Link>
            </li>
          </ul>

          <h2 className='text-2xl font-bold text-light-primary mb-2 mt-8'>
            Desktop{' '}
            <svg
              class='w-6 h-6 inline-block'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
              ></path>
            </svg>
          </h2>
          <ul className='text-light-secondary pl-4 list-disc ml-5'>
            <li>
              İşletim Sistemi{' ~ '}
              <Link href='https://pop.system76.com/'>
                <a className='text-light-accent font-bold border-transparent border-b-2 hover:border-light-accent  border-b-light-accent  transition duration-500 ease-in-out'>
                  POP OS
                </a>
              </Link>
            </li>
            <li>
              Tarayıcı{' ~ '}
              <Link href='https://www.google.com/chrome/'>
                <a className='text-light-accent font-bold border-transparent border-b-2 hover:border-light-accent  border-b-light-accent  transition duration-500 ease-in-out'>
                  Google Chrome
                </a>
              </Link>
            </li>
            <li>
              İkinci Tarayıcı{' ~ '}
              <Link href='https://www.mozilla.org/tr/firefox/'>
                <a className='text-light-accent font-bold border-transparent border-b-2 hover:border-light-accent  border-b-light-accent  transition duration-500 ease-in-out'>
                  Firefox
                </a>
              </Link>
            </li>
            <li>
              Email {' ~ '}
              <Link href='https://getmailspring.com/'>
                <a className='text-light-accent font-bold border-transparent border-b-2 hover:border-light-accent  border-b-light-accent  transition duration-500 ease-in-out'>
                  Mailspring
                </a>
              </Link>
            </li>
            <li>
              Görev & Proje Yönetimi{' ~ '}
              <Link href='https://trello.com'>
                <a className='text-light-accent font-bold border-transparent border-b-2 hover:border-light-accent  border-b-light-accent  transition duration-500 ease-in-out'>
                  Trello
                </a>
              </Link>
            </li>
          </ul>

          <h2 className='text-2xl font-bold text-light-primary mb-2 mt-8'>
            Mobile{' '}
            <svg
              class='w-6 h-6 inline-block'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
              ></path>
            </svg>
          </h2>
          <ul className='text-light-secondary pl-4 list-disc ml-5'>
            <li>
              Markdown Editör{' ~ '}
              <Link href='https://ia.net/writer'>
                <a className='text-light-accent font-bold border-transparent border-b-2 hover:border-light-accent  border-b-light-accent  transition duration-500 ease-in-out'>
                  iA Writer
                </a>
              </Link>
            </li>
            <li>
              Görev & Proje Yönetimi{' ~ '}
              <Link href='https://trello.com'>
                <a className='text-light-accent font-bold border-transparent border-b-2 hover:border-light-accent  border-b-light-accent  transition duration-500 ease-in-out'>
                  Trello App
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </Layout>
  )
}
