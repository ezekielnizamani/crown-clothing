import { useContext, useState } from "react";
import Button from "../button/Button";
import { CartContext } from "../../context/CartContext";
import "./ProductCard.scss";
const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  // const { cartItems, setCartItems } = useContext(CartContext);
  const { addItemToCart} = useContext(CartContext);
  // const onClickHandler = () => {
  //   setCartItems([...cartItems,product]);
  //   // if (cartItems.find((product) => product.id === id)) {
  //   //   setCartItems([{ id, name, imageUrl, price, qt: 5 }]);
  //   // }
  //   console.log(cartItems);
  // };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" click={() => addItemToCart(product)}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
