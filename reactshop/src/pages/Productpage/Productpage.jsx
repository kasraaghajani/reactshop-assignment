import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/basketSlice';

function Productpage() {



    
    //SnackBar message
        const [addToCartMessage, setAddToCartMessage] = useState("");
    
        const showAddToCartMessage = () => {
            setAddToCartMessage("محصول با موفقیت به سبد خرید اضافه شد");
          setTimeout(() => {
            setAddToCartMessage("");
          }, 3000);
        };


  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
      dispatch(addProduct(product));
  }

  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error("Error fetching product data:", error);
      });
  }, [params.id]);

  if (!product) {
    return <div>... درحال دریافت اطلاعات</div>;
  }




    return (
      
      <div className="container mx-auto mt-10">
      

<div className="">
<img className="h-80 mx-auto" src={product.image}></img>
<h1 className="text-xl font-bold">{product.title}</h1>
<span className="text-sm"> کد محصول : {params.id}</span>
      <div >
       {product.description}
        <p >
          aosjkdoakjsodjoajsdojasdojasdj
        </p>

        <button onClick={() => {handleAddToCart(product); showAddToCartMessage()}}  className="bg-green-200 p-2 md:p-3 rounded-lg mt-4 w-200 transition duration-300 ease-in-out hover:bg-green-500">
                                افزودن به سبد خرید 
                            </button>


      </div>
</div>
<div>

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
  
  export default Productpage;
