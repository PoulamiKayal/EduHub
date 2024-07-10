import Link from 'next/link';
import './style.css';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
export default function Footer(){
    return(
        <>
            <footer>
                <div className="container grid grid-four--cols">
                    <div className="footer-1--div">
                        <div className="logo-brand">
                           <Link href="/" className='footer-subheading'>ABC Eduhub</Link>
                        </div>
                        <p>Lets revolutionize the way you study with ABC Eduhub</p>
                    
                    <div className='social-footer--icons'>
                        <Link href="https://www.instagram.com/poulamikayal3_1?utm_source=qr&igsh=d29sc3c2bTR1Nm9k " target="_blank">
                        <FaInstagram className='logo-app' /></Link>

                        <Link href="https://www.instagram.com/poulamikayal3_1?utm_source=qr&igsh=d29sc3c2bTR1Nm9k " target="_blank">
                        <FaFacebookSquare  className='logo-app' /></Link>

                        <Link href="https://www.instagram.com/poulamikayal3_1?utm_source=qr&igsh=d29sc3c2bTR1Nm9k " target="_blank">
                        <FaSquareYoutube className='logo-app' /></Link>
                    </div>
                    </div>

                    <div className='footer-2--div'>
                        <p className='footer-subheading'>Courses</p>
                            <ul>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/'>Home</Link></li>
                            </ul>
                        
                    </div>

                    <div className='footer-3--div'>
                        <p className='footer-subheading'>Links</p>
                            <ul >
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/'>Home</Link></li>
                            </ul>
                        
                    </div>

                    <div className='footer-4--div'>
                        <p className='footer-subheading'>Blogs</p>
                            <ul>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/'>Home</Link></li>
                            </ul>
                        
                    </div>
                </div>
            </footer>
        </>
    )
}