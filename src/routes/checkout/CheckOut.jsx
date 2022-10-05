import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import CheckOutItem from "../../components/checkoutItem/CheckOutItem";
import {CheckOutHeader,CheckOutContainer,CheckOutHeaderBlock,Total} from "./CheckOut.styles";
const CheckOut = () => {
  const { cartItems,cartTotal} = useContext(CartContext);
 
  return (
    <CheckOutContainer>
      <CheckOutHeader>
        <CheckOutHeaderBlock  >
          <p>Product </p>
        </CheckOutHeaderBlock>
        <CheckOutHeaderBlock  >
          <p>Description </p>
        </CheckOutHeaderBlock>
        <CheckOutHeaderBlock  >
          <p>Quantity </p>
        </CheckOutHeaderBlock>
        <CheckOutHeaderBlock  >
          <p>Price </p>
        </CheckOutHeaderBlock>
        <CheckOutHeaderBlock  >
          <p >Remove </p>
        </CheckOutHeaderBlock>
      </CheckOutHeader>
      {cartItems.map((item) => (
        <CheckOutItem key={item.id} item={item} />
      ))}
      <Total><span>Total: {cartTotal}</span></Total>

    </CheckOutContainer>
  );
};

export default CheckOut;
