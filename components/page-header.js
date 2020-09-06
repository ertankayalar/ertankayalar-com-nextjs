import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'

class PageHeader extends React.Component {
    
    constructor(props) {
        super(props);
     //   this.burger = React.createRef();
        this.menu = React.createRef();
    }

    mobileMenu() {
        console.log('burger clicked');
        
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
          } else {
            menu.classList.add('hidden');
          }
 
    }

    render() {
  

        return (
            <header className="w-full  bg-white border-b ">
            <nav className="container mx-auto grid md:grid-cols-3">
    
                <div className="md:col-span-1 flex justify-between items-center md:justify-start py-5 h-24">
                    <span className="text-3xl text-gray-700">
                    <Link href="/">
                        <a><img src="/logo.png" alt={ this.props.siteTitle } /></a>
                    </Link>
                  
                  
                    </span>
    
                    <div className="px-4 cursor-pointer md:hidden text-gray-600" id="burger" onClick={this.mobileMenu}>
                        <svg className="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                      </div>
                </div>
    
                <div className="md:col-span-2 hidden  md:block h-auto md:h-24" id="menu" ref={this.menu}>
                        <Nav />
                </div>
                
    
    
            </nav>
    
        </header>
        );
     
    }

       
    
}


export default PageHeader;



