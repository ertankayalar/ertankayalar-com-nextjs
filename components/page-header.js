import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'

export default function PageHeader({ siteTitle }) {
    return (
        <header className="w-full  bg-white border-b ">
            <nav className="container mx-auto grid md:grid-cols-3">

                <div className="md:col-span-1 flex justify-between items-center md:justify-start py-5 h-24">
                    <span className="text-3xl text-gray-700">
                    <Link href="/">
                        <a><img src="/logo.png" alt={ siteTitle } /></a>
                    </Link>
                     
                  
                    </span>

                    <div className="px-4 cursor-pointer md:hidden" id="burger">
                        <svg className="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                      </div>
                </div>

                <div className="md:col-span-2 hidden md:block h-24" id="menu">
                        <Nav />
                </div>
                


            </nav>

        </header>

    )
}
