import React, { useState } from "react";
import "./forminput.css";

const FormInput = (props) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = (e) => {
    setFocus(true);
  };

  const { label, errorMessage, onChange, id, ...InputProps } = props;
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...InputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => InputProps.name === "ConfirmPassword" && setFocus(true)}
        focus={focus.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};
export default FormInput;
