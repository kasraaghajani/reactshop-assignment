import { useSelector } from "react-redux";

const Totalbasket = () => {
  const products = useSelector((state) => state.basket.products);

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    products.forEach((product) => {
      totalQuantity += product.quantity;
    });
    return totalQuantity;
  };

  return (
    <div>
      <span>{getTotalQuantity()}</span>
    </div>
  );
};

export default Totalbasket;
