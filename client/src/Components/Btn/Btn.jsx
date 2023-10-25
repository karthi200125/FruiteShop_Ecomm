import "./Btn.scss";
import { FaLongArrowAltRight } from 'react-icons/fa';

const Btn = ({ title, bgcolor, textcolor , icon }) => {

console.log(title , bgcolor , textcolor)
  return (
    <div className="btn" style={{ background: bgcolor || "#FF0137"}}>
      <button style={{color: textcolor || "white" }}>{title || "See More"}</button>
      <FaLongArrowAltRight size={20} style={{color:icon || "white"}}/>
    </div>
  );
}

export default Btn;
