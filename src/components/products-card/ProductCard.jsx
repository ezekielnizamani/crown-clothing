import { useContext} from "react";
import Button from "../button/Button";
import { CartContext } from "../../context/CartContext";
import "./ProductCard.scss";
const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  const { addItemToCart} = useContext(CartContext);
 
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
