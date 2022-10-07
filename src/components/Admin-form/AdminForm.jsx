import React from "react";
import Button from "../button/Button";
import FormInput from '../FormInput/FormInput'
import {AdminFormContainer} from './AdminForm.styles'
const AdminForm = () => {
  return (
    <AdminFormContainer>
    <h2>Admin login</h2>
      <form>
        <div>
          <FormInput type="text" placholder="username" />
        </div>
        <div>
          <FormInput type="text" placholder="Password" />
        </div>
        <Button>Login</Button>
      </form>
    </AdminFormContainer>
  );
};

export default AdminForm;
