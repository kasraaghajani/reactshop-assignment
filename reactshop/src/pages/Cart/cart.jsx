import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"; 
import { useDispatch } from 'react-redux';
import { reduceQuantity, increaseQuantity, removeProduct } from "../../redux/basketSlice";



function Cart(){







    const dispatch = useDispatch();
  
    const handleReduceQuantity = (productId) => {
      dispatch(reduceQuantity(productId));
    };
  
    const handleIncreaseQuantity = (productId) => {
      dispatch(increaseQuantity(productId));
    };

    const handleremoveProduct = (productId) => {
        dispatch(removeProduct(productId));
      };

    
    const products = useSelector((state) => state.basket.products);





    const basketProducts = useSelector(state => state.basket.products);

    // Calculate total price
    const calcTotalPrice = basketProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);
    const totalPrice = calcTotalPrice.toFixed(2);


    // Empty cart message
    if (basketProducts.length === 0) {
        return <div className='container mx-auto mt-20'>
          <div className="text-center bg-red-200 p-4 rounded-md border border-red-600">
            ! سبد خرید خالی است
          </div>
        </div>;
      } 

    return (
        <div className="flex flex-row-reverse ">


<div>      
                           
{products.map((product) => (
    <div key={product.id} className="p-5">
        <div className="container mx-auto px-4  p-6 flex flex-row-reverse shadow">
                                             <Link key={product.id} to={`/product/${product.id}`}>
                                            <img className="mx-auto pt-7 my-2 max-w-400 max-h-40" src={product.image} />

                                            </Link>
                                            <div>
                                                    <p className="text-right p-3 text-lg font-bold">
                                                    : عنوان محصول <br/> {product.title}
                                                    </p>
                                                    <p className="text-right p-3 text-lg font-bold">
                                                    قیمت : ${product.price}
                                                    </p>
                                                    <p className="text-left p-3 text-xs">
                                                   توضیحات :<br/>
                                                    {product.description}
                                                    </p> 

                                                  
                                                    
                                                    <div className="mt-4">
                                                    <button className="bg-blue-500 rounded-full w-6 h-6 text-white" onClick={() => handleIncreaseQuantity(product.id)}>
                                                    +
                                                    </button>
                                                    <span className="mx-1">{product.quantity}</span>
                                                    <button className="bg-blue-500 rounded-full w-6 h-6 text-white" onClick={() => handleReduceQuantity(product.id)}>
                                                    -
                                                    </button>
                                                    <button className="bg-red-500 rounded-lg w-12 h-6 text-white ml-2" onClick={() => handleremoveProduct(product.id)}>حذف</button>
                                                </div>
              

                                            </div>   
                                                              
    </div>  

</div>
))}                 

</div>  

                   


            <div className="mx-10">
                    <div className="bg-gray-200">
                    <div className="px-2 py-3 mt-7 mx-20">

                    <div className='text-right'>
                    <p>مجموع سبد خرید : {totalPrice}$</p> <br/>
                    <p>تخفیف : 0</p> <br/>
                    <p>: قیمت نهایی<br/>
                    {totalPrice}$
                    </p> <br/>
                    </div>


                    </div>
                    <button className="mb-3 ml-20 mt-2 px-3 py-2 bg-green-500 rounded-lg text-white">
                    تکمیل سفارش
                    </button>
                    </div>
            </div>








                    </div>


    )
}

export default Cart;