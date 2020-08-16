import Head from 'next/head'
import Link from 'next/link'

export default function PageHeader() {
    return (
        <header className="w-full  bg-gray-100 ">
            <nav className="container mx-auto grid md:grid-cols-3">

                <div className="md:col-span-1 flex justify-between items-center md:justify-start py-5">
                    <span className="text-3xl text-gray-700">
                        <a href="/">Front Template</a>
                    </span>

                    <div className="px-4 cursor-pointer md:hidden" id="burger">
                        <svg className="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                      </div>
                </div>

                <div className="md:col-span-2 py-5 hidden md:block" id="menu">

                    <ul className="flex flex-wrap md:justify-end">
                        <li className="text-gray-700 py-2 w-full text-center md:px-2 md:w-auto md:inline-block hover:text-primary-600"><a href="/">Home</a></li>
                        <li className="text-gray-700 py-2 w-full text-center md:px-2 md:w-auto md:inline-block hover:text-primary-600"><a href="/about.html">About</a></li>
                        <li className="text-gray-700 py-2 w-full text-center md:px-2 md:w-auto md:inline-block hover:text-primary-600"><a href="/blog.html">Blog</a></li>
                        <li className="text-gray-700 py-2 w-full text-center md:px-2 md:w-auto md:inline-block hover:text-primary-600"><a href="/products.html">Products</a></li>
                        <li className="text-gray-700 py-2 w-full text-center md:px-2 md:w-auto md:inline-block hover:text-primary-600"><a href="/contact.html">Contact</a></li>
                    </ul>
                </div>
                


            </nav>

        </header>

    )
}
