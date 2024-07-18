import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";

function Footer() {

    return (
      <div className="mt-20">

                <div className="bg-blue-700 pt-20 pb-20">
                        <nav className="text-white text-center h-18">               
                             <ul className="flex px-10 py-3 flex-row-reverse justify-center">

                                    <li className="ml-5 cursor-pointer">
                                   <img className="w-16  cursor-pointer" src={icon1} />
                                    </li>
                                    <li className="ml-5 cursor-pointer">
                                    <img className="w-16  cursor-pointer" src={icon2} />
                                    </li>

                                    <li className="ml-5 cursor-pointer">
                                   <img className="w-16  cursor-pointer" src={icon4} /> 
                                    </li>

                                    <li className="ml-5 cursor-pointer">
                                     <img className="w-16  cursor-pointer" src={icon3} />
                                    </li>

                                    <li className="ml-5 cursor-pointer">
                                    <img className="w-16  cursor-pointer" src={icon5} />
                                    </li>

                            </ul>
                </nav>

        </div>
        </div>



    )
  }
  
  export default Footer;