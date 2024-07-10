import Image from "next/image";

import './style.css';
export default function About(){
    return(
        <>
            <section className="section-about">
               <div className="container">
                 <h2 className="section-common-heading">About ABC Eduhub</h2>
                <p className="section-common-subheading">
                    Guiding Your Learing Journey through Reserach , Design, and 
                    Development Excellence.
                </p>
               </div>

               <div className="container grid grid-three--cols">
                <div className="about-div">
                    <div className="icon">
                        <Image src="/asset/research.png" alt="image1" width={500} height={500}/>
                    </div>
                    <h3 className="section-common--title">Reserach</h3>
                    <p>
                        we start by learning whay you need , we look ai wahts new and exciting in learning and choose topics that match what 
                        uou want to learn.
                    </p>
                </div>

                <div className="about-div">
                    <div className="icon">
                        <Image src="/asset/design.png" alt="image2" width={500} height={500}/>
                    </div>
                    <h3 className="section-common--title">Design</h3>
                    <p>
                        Next we make the lesson we make them fun and interesting for you we make sure they work fifferent ways people like 
                        to learn.
                    </p>
                </div>

                <div className="about-div">
                    <div className="icon">
                        <Image src="/asset/dev.png" alt="image3" width={500} height={500}/>
                    </div>
                    <h3 className="section-common--title">Devolopment</h3>
                    <p>
                        we start by learning whay you need , we look ai wahts new and exciting in learning and choose topics that match what 
                        uou want to learn.
                    </p>
                </div>
           </div>

            </section>

            
        </>
    )
}

