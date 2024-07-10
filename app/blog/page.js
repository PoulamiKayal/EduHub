import './style.css';
import Image from 'next/image';
export default function Blog(){
    return(
        <>
        <blog>
             <section className="section-why--choose">
               <div className="container">
                 <h2 className="section-common-heading">Why Choose ABC Eduhub</h2>
                <p className="section-common-subheading">
                    Choose ABC Eduhub for a holistic.enriching learing that empowers you to achive 
                    your gools.
                </p>
               </div>

               <div className="container grid grid-three-cols">

                 <div className="choose-left--div text-align--right">
                    
                    <div className="why-choose--div">
                        <p className="common-text--highlight">1</p>
                        <h3 className="section-common--title">Expert Instructions</h3>
                        <p>
                        Expert instruction delivers comprehensive guidance, 
                        refining skills and knowledge through targeted learning strategies, fostering mastery and proficiency.
                        </p>
                    </div>

                    <div className="why-choose--div">
                        <p className="common-text--highlight">2</p>
                        <h3 className="section-common--title">Lifelong Learing Support</h3>
                        <p>
                        Expert instruction delivers comprehensive guidance, 
                        refining skills and knowledge through targeted learning strategies, fostering mastery and proficiency.
                        </p>
                    </div>

                    <div className="why-choose--div">
                        <p className="common-text--highlight">3</p>
                        <h3 className="section-common--title">Lifelong Learing Support</h3>
                        <p>
                        Expert instruction delivers comprehensive guidance, 
                        refining skills and knowledge through targeted learning strategies, fostering mastery and proficiency.
                        </p>
                    </div>

                 </div>

                 {/* center part */}
                  <div className='choose-center--div'>
                    <figure>
                        <Image src="/asset/mobile.png" 
                        alt='mobile-image' 
                        width={400} 
                        height={800}/>
                    </figure>
                  </div>
                 {/* right side content */}

                 <div className="choose-right--div text-align--left">
                    
                    <div className="why-choose--div">
                        <p className="common-text--highlight">4</p>
                        <h3 className="section-common--title">Expert Instructions</h3>
                        <p>
                        Expert instruction delivers comprehensive guidance, 
                        refining skills and knowledge through targeted learning strategies, fostering mastery and proficiency.
                        </p>
                    </div>

                    <div className="why-choose--div">
                        <p className="common-text--highlight">5</p>
                        <h3 className="section-common--title">Lifelong Learing Support</h3>
                        <p>
                        Expert instruction delivers comprehensive guidance, 
                        refining skills and knowledge through targeted learning strategies, fostering mastery and proficiency.
                        </p>
                    </div>

                    <div className="why-choose--div">
                        <p className="common-text--highlight">6</p>
                        <h3 className="section-common--title">Lifelong Learing Support</h3>
                        <p>
                        Expert instruction delivers comprehensive guidance, 
                        refining skills and knowledge through targeted learning strategies, fostering mastery and proficiency.
                        </p>
                    </div>

                 </div>


               </div>
               </section>
               </blog>
        </>
    )
}