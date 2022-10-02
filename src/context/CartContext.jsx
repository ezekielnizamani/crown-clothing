import { createContext, useEffect, useState } from "react";
const addCartItem = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

const removeCartItem = (cartItems, product) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );
  
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== product.id);
  }
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};
const clearCartItem = (cartItems,item) =>{
 return cartItems.filter(cartItem => cartItem.id !== item.id);
}
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addCartItems: () => {},
  removeCartItem:()=>{},
  cartCount: 0,
  cartTotal: 0,
  clearCartItem:()=>{}
});
export const CartContextProider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };
  const cartItemToRemove = (product) => {
    setCartItems(removeCartItem(cartItems, product));
  };
  const cartItemToClear = (item)=>{
    setCartItems(clearCartItem(cartItems, item));

  }
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
   
    setCartCount(newCartCount);
  }, [cartItems]);
  useEffect(()=>{
    const totalPrice = cartItems.reduce(
      (total , cartItem) =>  total  + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(totalPrice);
  },[cartItems])
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    cartTotal,
    cartItemToRemove,
    cartItemToClear
  };

  return <CartContext.Provider value={value}> {children}</CartContext.Provider>;
};
