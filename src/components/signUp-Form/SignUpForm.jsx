import { useState} from "react";
import {
  authCreateUserWithEmailAndPassword,
  createUserDocumentAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../FormInput/FormInput";
import {H2,SignUpFormContainer} from  "./SignUpForm.styles.jsx";
import Button from "../button/Button";
const formDefualtFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(formDefualtFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const resetForm = () => {
      setFormFields(formDefualtFields);
    };
    if (confirmPassword !== password) {
      alert("Password dosen't match");
      return;
    }
    try {
      const { user } = await authCreateUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentAuth(user, { displayName: displayName });
      // setCurrentUser(user)
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log(error);

        alert("This email is already in use ");
      }
    }
  };
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpFormContainer>
      <H2>Don't have an account?</H2>
      <span>Sign up with email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            required: true,
            name: "displayName",
            onChange: onChangeHandler,
            value: displayName,
          }}
        />
        <FormInput
          label="Email"
          inputOptions={{
            type: "Email",
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
        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            required: true,
            name: "confirmPassword",
            onChange: onChangeHandler,
            value: confirmPassword,
          }}
        />

          <Button type="submit"> Sign Up</Button>
        </form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
