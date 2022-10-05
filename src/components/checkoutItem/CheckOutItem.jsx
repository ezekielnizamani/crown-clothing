import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {CheckOutItemContainer,ImageContainer,Image,Span,RemoveButton,Arrow,Value,Quantity,Price} from "./CheckOutItem.styles.jsx";

const CheckOutItem = ({ item }) => {
  const { cartItemToRemove, addItemToCart, cartItemToClear } =
    useContext(CartContext);
  const { imageUrl, name, quantity, price } = item;
  const addItemHandler = () => addItemToCart(item);
  const cartItemToRemoveHandler = () => cartItemToRemove(item);
  const cartItemToClearHandler = () => cartItemToClear(item);
  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Span>{name}</Span>
      <Quantity>
        <Arrow onClick={cartItemToRemoveHandler}>
          &#10094;
        </Arrow>
        <Value >{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton  onClick={cartItemToClearHandler}>
        &#10005;
      </RemoveButton>
    </CheckOutItemContainer>
  );
};

export default CheckOutItem;
