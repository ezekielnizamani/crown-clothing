import { useState } from "react";
import {
  authSignInWithUserWithEmailAndPassword,
  createUserDocumentAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";
import FormInput from "../FormInput/FormInput";
import Button, { BUTTON_TYPE } from "../button/Button";
import {
  SignInFormContainer,
  H2,
  ButtonsContainer,
} from "./SignInForm.styles.jsx";
const formDefualtFields = {
  email: "",
  password: "",
};
// console.log(formDefualtFields);

const SignInForm = () => {
  const [formFields, setFormFields] = useState(formDefualtFields);
  const { email, password } = formFields;

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const resetForm = () => {
      setFormFields(formDefualtFields);
    };
    try {
      await authSignInWithUserWithEmailAndPassword(email, password);
      // setCurrentUser(user);
      // console.log(currentUser);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("User dosn't exist ");
          break;

        default:
          console.log(error);
      }
    }
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    // console.log(formFields);
  };

  const loginWithGoolge = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentAuth(user);
  };
  return (
    <SignInFormContainer>
      <H2>already have an account?</H2>
      <span>Sign in with email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            required: true,
            name: "email",
            onChange: onChangeHandler,
            value: email,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            required: true,
            name: "password",
            onChange: onChangeHandler,
            value: password,
          }}
        />

        <ButtonsContainer>
          <Button type="submit"> Sign In</Button>

          <Button
            buttonType={BUTTON_TYPE.google}
            type="button"
            click={loginWithGoolge}
          >
            {" "}
            google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInFormContainer>
  );
};

export default SignInForm;
