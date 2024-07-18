import { Link } from "react-router-dom";
import Totalbasket from "../Totalbasket/Totalbasket";
function Header() {

    return (
      <div className="">

                <div className="bg-blue-700">
                        <nav className="text-white text-center h-18">               
                             <ul className="flex px-5 py-3 flex-row-reverse">

                                        <Link to="/">
                                    <li className="ml-5 cursor-pointer text-lg bg-blue-400 px-5 py-1 rounded-full text-white transition duration-500 ease-in-out hover:bg-red-500">
                                    ری‌اکت شاپ
                                        </li>
                                        </Link>
                                
                                 <Link to="/"><li className="ml-5 cursor-pointer">صفحه اصلی</li></Link>
                                 <Link to="/shop"><li className="ml-5 cursor-pointer">محصولات</li></Link>
                                 <Link to="/contact"><li className="ml-5 cursor-pointer">تماس با ما</li></Link>

                                    <div className="relative">
                                    <span className="bg-red-500 rounded-full p-1 text-sm absolute bottom-4 right-12 mr-4">
                                        <Totalbasket />
                                    </span>

                                    <Link to="/cart">
                                    <li className="">
                                        
                                         <button className="">سبد خرید</button>
                                    </li>
                                    </Link>
                                    
                                    </div>

                            </ul>
                </nav>

        </div>
        </div>



    )
  }
  
  export default Header;