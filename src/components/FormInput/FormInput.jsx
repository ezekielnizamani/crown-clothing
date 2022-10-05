import React from "react";
import { Group, Input,InputLabel } from "./FormInput.styles";

const FormInput = ({ label, inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />
      {label && (
        <InputLabel
          className={`${
            inputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </InputLabel>
      )}
    </Group>
  );
};

export default FormInput;
