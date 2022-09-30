import { useContext } from "react";
import Button from "../../components/button/Button";
import { CartContext } from "../../context/CartContext";
import CartItem from "../cart-item/CartItem";
import "./DropDown.scss";
const DropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          
          <CartItem key={cartItem.id} cartItem={cartItem}/>
        ))}
      </div>
      <Button>To checkout</Button>
    </div>
  );
};

export default DropDown;
