import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {CartIconContainer,ItemCount,ShoppingIcon} from "./CartIcon.syles";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen ,cartCount} = useContext(CartContext);
  const onClickHandler = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer  onClick={onClickHandler}>
      <ShoppingIcon/>
      <ItemCount >{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
