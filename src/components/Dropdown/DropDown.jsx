import { useContext } from "react";
import Button from "../../components/button/Button";
import { CartContext } from "../../context/CartContext";
import CartItem from "../cart-item/CartItem";
import { Link } from "react-router-dom";
import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage
} from "./DropDown.styles.jsx";

const DropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <CartDropDownContainer>
      <CartItems>

     {cartItems.length ?  cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        )) : <EmptyMessage>Cart is empty</EmptyMessage>  
      }
      </CartItems>
      <Link to="checkout">
        <Button>To checkout</Button>
      </Link>
    </CartDropDownContainer>
  );
};

export default DropDown;
