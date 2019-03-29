import React from "react";
import ReactDOM from "react-dom";
import useForm from "react-hook-form";
import Input from "@material-ui/core/Input";

import "./styles.css";

const MyInput = ({ name, label, register }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} placeholder="Jane" ref={register} />
    </>
  );
};

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyInput name="firstName" label="First Name" register={register} />

        <Input
          name="HelloWorld"
          inputRef={register}
          defaultValue="Hello world"
          inputProps={{
            "aria-label": "Description"
          }}
        />

        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" placeholder="Doe" ref={register} />

        <label htmlFor="email">Email</label>
        <input
          name="email"
          placeholder="jane@acme.com"
          type="email"
          ref={register}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
