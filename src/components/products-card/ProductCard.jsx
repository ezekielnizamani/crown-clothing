import { useContext } from "react";
import Button, { BUTTON_TYPE } from "../button/Button";
import { CartContext } from "../../context/CartContext";
import {
  ProductCardContainer,
  Image,
  Footer,
  NameStyle,
  PriceStyle,
} from "./ProductCard.styles.jsx";
const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;

  const { addItemToCart } = useContext(CartContext);

  return (
    <ProductCardContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <Footer>
        <NameStyle className="name">{name}</NameStyle>
        <PriceStyle className="price">{price}</PriceStyle>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE.inverted}
        onClick={() => addItemToCart(product)}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
