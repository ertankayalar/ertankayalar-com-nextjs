import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'

class PageHeader extends React.Component {
  constructor(props) {
    super(props)
    //   this.burger = React.createRef();
    this.menu = React.createRef()
  }

  mobileMenu() {
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden')
    } else {
      menu.classList.add('hidden')
    }
  }

  render() {
    return (
      <header className='w-full  bg-white border-b '>
        <section className=' mx-auto max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-lg grid grid-flow-col grid-cols-1 sm:grid-cols-3'>
          <div className='col-span-3 lg:col-span-1 flex justify-center items-center md:justify-start py-5 h-24 md:pl-2 '>
            <span className='text-3xl text-gray-700 mx-auto lg:ml-0'>
              <Link href='/'>
                <a>
                  <img src='/logo.png' alt={this.props.siteTitle} />
                </a>
              </Link>
            </span>

            <div
              className='px-4 cursor-pointer hidden text-gray-600'
              id='burger'
              onClick={this.mobileMenu}
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </div>
          </div>

          <div
            className=' hidden  lg:col-span-2 lg:block h-auto md:h-24 pr-2'
            id='menu'
            ref={this.menu}
          >
            <Nav />
          </div>
        </section>
      </header>
    )
  }
}

export default PageHeader
