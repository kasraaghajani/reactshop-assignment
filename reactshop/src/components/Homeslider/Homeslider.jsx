import imageSrc from "../../assets/rshop.png";
import { Link } from "react-router-dom";
function Homeslider() {

    return (
      <Link to="/shop">
      <div>
        <img className="w-full h-auto" src={imageSrc}/>
        </div>
      </Link>


    )
  }
  
  export default Homeslider;