import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/CartIcon";
import "./Navigation.scss";
import DropDown from "../../components/Dropdown/DropDown";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen,cartItems} = useContext(CartContext);

  // console.log(currentUser);

  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link to="/">
            <CrownLogo />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link to="shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to="signIn" className="nav-link">
              SIGN IN
            </Link>
          )}
          <CartIcon/>
        </div>
        {isCartOpen && <DropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
