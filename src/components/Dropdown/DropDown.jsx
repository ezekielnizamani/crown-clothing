import { useContext } from "react";
import Button from "../../components/button/Button";
import { CartContext } from "../../context/CartContext";
import CartItem from "../cart-item/CartItem";
import { Link } from "react-router-dom";
import {
  CartDropDownContainer,
  CartItems,
  LinkButton,
} from "./DropDown.styles.jsx";

const DropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </CartItems>
      <LinkButton to="checkout">
        <Button>To checkout</Button>
      </LinkButton>
    </CartDropDownContainer>
  );
};

export default DropDown;
