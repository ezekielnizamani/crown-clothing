import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import "./Navigation.scss";
const Navigation = () => {
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
          <Link to="signIn" className="nav-link">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
