import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/CartContext";
import {
  CartIconContainer,
  ItemCount,
  ShoppingIconStyle,
} from "./CartIcon.syles";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const onClickHandler = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={onClickHandler}>
      <ShoppingIconStyle>
        <ShoppingIcon />
      </ShoppingIconStyle>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
