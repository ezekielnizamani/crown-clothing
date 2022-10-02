import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CheckOutItem.scss";

const CheckOutItem = ({ item }) => {
  const { cartItemToRemove, addItemToCart, cartItemToClear } =
    useContext(CartContext);
  const { imageUrl, name, quantity, price } = item;
  const addItemHandler = () => addItemToCart(item);
  const cartItemToRemoveHandler = () => cartItemToRemove(item);
  const cartItemToClearHandler = () => cartItemToClear(item);
  return (
    <div className="checkout-item-container ">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={cartItemToRemoveHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={cartItemToClearHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckOutItem;
