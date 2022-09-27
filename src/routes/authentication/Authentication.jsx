import React from "react";
import SignUpForm from "../../components/signUp-Form/SignUpForm";

import SignInForm from "../../components/signInForm/SignInForm";
import './Authentication.scss'

const Authentication = () => {
 
  //       <button onClick={logGoogleUser}>SignIn</button>

  return (
    <div className="authentication">
      <SignInForm/>
      <SignUpForm />
    </div>
  );
};

export default Authentication;
