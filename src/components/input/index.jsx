import React from "react";
import { InputContainer, InputText } from "./styles";
import { Controller } from "react-hook-form";

const Input = ({ register, name, control, errorMessage, ...rest }) => {
  return (
    <>
      <InputContainer>
        <Controller
          name={name}
          control={control}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
    </>
  );
};

export default Input;
