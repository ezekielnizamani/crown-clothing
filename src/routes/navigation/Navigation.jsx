import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/CartIcon";
import {NavigationContainer,LogoContainer,NavLinks,NavLink} from './Navigation.styles'
import DropDown from "../../components/Dropdown/DropDown";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen} = useContext(CartContext);


  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer>
          <Link to="/">
            <CrownLogo />
          </Link>
        </LogoContainer>
        <NavLinks>
          <NavLink to="shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="signIn">
              SIGN IN
            </NavLink>
          )}
          <CartIcon/>
        </NavLinks>
        {isCartOpen && <DropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
