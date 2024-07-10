import "./style.css";
import Props from "./Props";
import { FaLaptopCode } from "react-icons/fa6";
const Services = () => {
  return (
    <>
      <section className="section-course">
        <div className="container">
          <h2 className="section-common-heading">Explore Our Courses</h2>
          <p className="section-common-subheading">
            Discover a variety of courses across different catagories.
          </p>
        </div>
        <div className="container grid grid-four--cols">
          
          <Props
            title="Javascript"
            para="JavaScript empowers dynamic web interactions, enhancing user experience and enabling interactive web applications"
           pic= {<FaLaptopCode/>}
          />

          <Props
            title="Python"
            para="Python excels in versatility, offering simplicity, readability, and robustness for diverse programming tasks."
            pic= "FaLaptopCode"
          />

          <Props
            title="c++ Devolopment"
            para=" we start by learning whay you need , we look ai wahts new and exciting in learning and choose topics that match what 
                        uou want to learn."
            pic= "FaLaptopCode"
          />

          <Props
            title="c Development"
            para="C remains foundational, essential for system-level operations and efficient programming practices."
            pic= "FaLaptopCode"
          />

          <Props
            title="sql Development"
            para="C remains foundational, essential for system-level operations and efficient programming practices."
            pic= "FaLaptopCode"
          />

          <Props
            title="html Development"
            para="C remains foundational, essential for system-level operations and efficient programming practices."
            pic= "FaLaptopCode"
          />

          <Props
            title="css Development"
            para="C remains foundational, essential for system-level operations and efficient programming practices."
            pic= "FaLaptopCode"
          />
          <Props
            title="react Development"
            para="C remains foundational, essential for system-level operations and efficient programming practices."
            pic= "FaLaptopCode"
          />
        </div>
      </section>
    </>
  );
};

export default Services;
