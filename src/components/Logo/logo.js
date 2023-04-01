import "./logo.css";
import brainlogo from "../../Assets/brain-logo.png";
import Tilt from "react-parallax-tilt";

const Logo = () => {
 return (
  <Tilt className="tilt">
   <div className="logo">
    <div>
     <img
      className="image-logo"
      alt="brain-logo"
      src={brainlogo}
     />
    </div>
   </div>
  </Tilt>
 );
};
export default Logo;
