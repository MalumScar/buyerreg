import { useState } from "react";
import "./styles.css";
import FormInput from "./components/FormInput";

export default function App() {
  const [values, setValues] = useState({
    StudentNumber: "",
    Name: "",
    Surname: "",
    DOB: "",
    EmailAddress: "",
    CreateUsername: "",
    CreatePassword: "",
    ConfirmPassword: ""
  });
  const inputs = [
    {
      id: 1,
      name: "StudentNumber",
      type: "tel",
      placeholder: "your student number",
      errorMessage: "This Selection Requires Numbers Only, 9 Digits Required",
      maxLength: "9",
      minLength: "9",
      label: "Student Number",
      required: true
    },
    {
      id: 2,
      name: "Name",
      type: "text",
      placeholder: "your name",
      label: "Name"
    },
    {
      id: 3,
      name: "Surname",
      type: "text",
      placeholder: "your surname",
      label: "Surname"
    },
    {
      id: 4,
      name: "DOB",
      type: "date",
      placeholder: "your date of birth",
      label: "Birth-Date"
    },
    {
      id: 5,
      name: "EmailAddress",
      type: "email",
      placeholder: "your email address",
      errorMessage: "Enter Valid email address",
      label: "Email Address",
      required: true
    },
    {
      id: 6,
      name: "CreatePassword",
      type: "password",
      placeholder: "create a password",
      errorMessage:
        "Password should be 8-20 characters long, should include 1 letter,1 number, 1 special character",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])([a-zA-Z0-9!@#$%^&*]{8,20}$",
      label: "Create Password",
      required: true
    },
    {
      id: 7,
      name: "ConfirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      pattern: values.CreatePassword,
      label: "Confirm Password",
      required: true
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>SUBMIT</button>
      </form>
    </div>
  );
}
