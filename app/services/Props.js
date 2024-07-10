import "./style.css";
import { FaLaptopCode } from "react-icons/fa6";
const Props = (props) => {
  const { title, para, pic } = props;
  console.log("props", props.pic)
  return (
    <>
      <div className="course-div">
        <div className="icon">
            <pic className="logo" />  
        </div>
        <h3 className="section-common--title">{title}</h3>
        <p>{para}</p>
      </div>
    </>
  );
};

export default Props;
