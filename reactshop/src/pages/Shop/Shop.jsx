import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom"; 
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/basketSlice';
import { useState } from "react";



const Shop = () => {
    
//SnackBar message
    const [addToCartMessage, setAddToCartMessage] = useState("");

    const showAddToCartMessage = () => {
        setAddToCartMessage("محصول با موفقیت به سبد خرید اضافه شد");
      setTimeout(() => {
        setAddToCartMessage("");
      }, 3000);
    };

    const getProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            return response.data;
        } catch (error) {
            console.error("Error fetching products: ", error);
            throw error;
        }
    };

    const query = useQuery({ queryKey: ['products'], queryFn: getProducts });




    if (query.isLoading) {
        return <div>
            <p className="my-10 py-2 px-2 text-center rtl">
                در حال دریافت اطلاعات محصولات ...
            </p>
        </div>;
    }

    if (query.isError) {
        return <div className="my-10 py-2 px-2 text-center rtl">
            Error: {query.error.message}
            </div>;
    }


    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addProduct(product));
    }


return ( 
    <div>
        <div className="container mx-auto"> 
        <h1 className="text-right mt-5">محصولات</h1>
            <div className="grid grid-cols-4 gap-10">
                {query.data?.map((product) => ( 
                    

                    <div key={product.id}>
                        <Link key={product.id} to={`/product/${product.id}`}>

                        <div>
                            <div className="shadow w-500 h-500">
                                <img className="mx-auto pt-7 my-2 max-w-400 max-h-40" src={product.image} />
                                                    <div className="flex justify-between p-4 flex-row-reverse">
                                                        <h5 className="text-xs line-clamp-1 font-bold">
                                                                {product.title}
                                                        </h5>
                                                    </div>
                            <div className="p-4">

                                <p className="text-xs mb-5 line-clamp-2">
                                    {product.description}
                                </p>
                                <span className="bg-green-100 p-1">
                                    ${product.price}
                                </span>
                            </div>
                            </div>


                        </div>
                        </Link>
                        <button onClick={() => {handleAddToCart(product); showAddToCartMessage()}}  className="bg-green-200 p-2 md:p-3 rounded-lg mt-4 w-200 transition duration-300 ease-in-out hover:bg-green-500">
                                افزودن به سبد خرید 
                            </button>
                        
                            <div>
                            <div>

</div>
    </div>
                            <div>

      
    </div>


                        </div>
                        
                    
                    
                    
                                             ))}


</div>
</div>

<div
        style={{
        border: "2px solid #73e273",
          position: "fixed",
          bottom: 10,
          right: 10,
          color: "#2f2f2f",
          background: "rgb(173 243 197)",
          padding: 10,
          borderRadius: 5,
          display: addToCartMessage ? "block" : "none"
        }}
      >
        {addToCartMessage}
      </div>


    </div>
    
)
}
export default Shop;