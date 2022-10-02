import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import CheckOutItem from "../../components/checkoutItem/CheckOutItem";
import "./CheckOut.scss";
const CheckOut = () => {
  const { cartItems,cartTotal} = useContext(CartContext);
 
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="checkout-block">
          <p>Product </p>
        </div>
        <div className="checkout-block">
          <p>Description </p>
        </div>
        <div className="checkout-block">
          <p>Quantity </p>
        </div>
        <div className="checkout-block">
          <p>Price </p>
        </div>
        <div className="checkout-block">
          <p >Remove </p>
        </div>
      </div>
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} item={item} />
      ))}
      <div className="total"><span>Total: {cartTotal}</span></div>

    </div>
  );
};

export default CheckOut;
