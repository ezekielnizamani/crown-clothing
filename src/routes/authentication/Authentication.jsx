import React from "react";
import SignUpForm from "../../components/signUp-Form/SignUpForm";

import SignInForm from "../../components/signInForm/SignInForm";
import {AuthenticationContainer} from './Authentication.styles.jsx'


const Authentication = () => {
 

  return (
    <AuthenticationContainer>
      <SignInForm/>
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
