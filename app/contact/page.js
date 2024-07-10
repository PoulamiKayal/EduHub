import Link from "next/link";
import Image from 'next/image';
import './style.css';
export default function Contact(){
    return(
        <>
            <div className="section-contact--homepage" id="section-contact--homepage">
                <div className="container grid grid-two--cols">
                    <div className="contact-content">
                        <h2 className="contact-title">Lets revolutionize the way you study</h2>
                        <p>join our free bootcamps to know us better</p>
                        <div className="btn">
                          <Link href="/" className="btn-button">start now</Link>
                        </div>
                    </div>
                    <div className="contact-image">
                        <Image src="/asset/main.png" 
                        alt="main"
                        width={500}
                        height={500}    
                        />
                    </div>
                </div>
            </div>
        </>
    )
}