import React from "react";
import "./Button.scss";

const BUTTON_TYPE = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, type, click }) => {
  // console.log(otherProps)
  return (
    <button
      className={`button-container ${BUTTON_TYPE[buttonType]}`}
      type={type && type}
      onClick={click && click}
    >
      {children}
    </button>
  );
};

export default Button;
