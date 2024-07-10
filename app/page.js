import Navbar from './navbar/page';
import Data from './data/page';
import About from './about/page';
import Services from './services/page';
import Blog from './blog/page';
import Contact from './contact/page'
import Footer from './footer/page';
export default function Home(){
    return(
        <>
         <head>
        <title>My Page Title</title>
        <meta name="description" content="Description of my page" />
        </head>
         <Navbar/>
         <Data/>
         <About/>
         <Services/>
         <Blog/>
         <Contact/>
         <Footer/>
        </>
    )
}