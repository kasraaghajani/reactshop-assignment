

function CartItem(){

    return (

        <div>


  



         {/* <div className="flex justify-between flex-row-reverse">
        <img  src="https://upload.wikimedia.org/wikipedia/commons/2/27/Square_200x200.svg"/>
        <p className="p-5 bg-gray-100 text-center">
        123123
        </p>
        </div> */}


        <div className="container mx-auto px-4 py-8 p-6 shadow flex flex-row-reverse">
            <div className="">
            <img className="h-40 w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/2/27/Square_200x200.svg"
            alt=""
            />
            
            <div className="mt-4">
            <button className="bg-blue-500 rounded-full  w-6 h-6 text-white ">+</button>
            <span className="mx-1">{2}</span>
            <button className="bg-blue-500 rounded-full w-6 h-6 text-white">-</button>
            <button className="bg-red-500 rounded-lg w-12 h-6 text-white ml-2">حذف</button>
            </div>

            </div>
<div>
<p className="text-right p-3 text-lg font-bold">
عنوان محصول
</p>
<p className="text-right p-3 text-lg font-bold">
قیمت
</p>
<p className="text-right p-3 text-lg">
تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست 
 
</p>
</div>
            
        </div>
        </div>
    )
}

export default CartItem;