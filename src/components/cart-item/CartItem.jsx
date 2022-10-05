import  {CartItemContainer, ItemDetails,Image,Name}from "./CartItem.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name className="name">{name}</Name>
        <span className="price">{price}</span>
        <span className="price">
          {quantity} X   {quantity * price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
