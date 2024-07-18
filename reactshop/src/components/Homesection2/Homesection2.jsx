import section2img1 from "../../assets/rshop1.png";
import section2img2 from "../../assets/rshop2.png";
import section2img3 from "../../assets/rshop3.png";
import { Link } from "react-router-dom";



function Homesection2() {

    return (
      <div className="max-w-5xl mx-auto px-5 py-5">
        <div className="grid grid-cols-4 gap-5">
        <Link to="/shop">  <img className="w-full h-auto rounded-md shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-110" src={section2img1} /> </Link>
        <Link to="/shop">   <img className="w-full h-auto rounded-md shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-110" src={section2img2} /> </Link>
        <Link to="/shop">   <img className="w-full h-auto rounded-md shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-110" src={section2img3} /> </Link>
        <Link to="/shop">   <img className="w-full h-auto rounded-md shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-110" src={section2img2} /> </Link>
        </div>
        </div>
                                       



    )
  }
  
  export default Homesection2;