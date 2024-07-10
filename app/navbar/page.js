import Link from 'next/link';
import './style.css';
export default function Navbar(){
    return(
        <>
        <div className="section-navbar">
            <div className="container">
                <div className="navbar-brand">
                     <h1>Eduhub</h1>
                </div>
                <nav className="navbar">
                    <ul>
                        <li className='nav-item'>
                           <Link href="/data">
                               <span className='nav-link'>home</span>
                            </Link>
                        </li>

                        <li className='nav-item'>
                           <Link href="/about">
                               <span className='nav-link'>about</span>
                            </Link>
                        </li>

                        <li className='nav-item'>
                           <Link href="/services">
                               <span className='nav-link'>services</span>
                            </Link>
                        </li>

                        <li className='nav-item'>
                           <Link href="/blog">
                               <span className='nav-link'>blog</span>
                            </Link>
                        </li>

                        <li className='nav-item'>
                           <Link href="/contact">
                               <span className='nav-link'>contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}