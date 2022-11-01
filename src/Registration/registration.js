import React from "react";
import MyInput from "../UI/MyInput";
import MyButton from "../UI/MyInput/MyButton";
import "./registration.css";
const Registration = () => {
  function Click() {
    alert();
  }
  return (
    <div className="registration-form">
      <div>
        <label htmlFor="Name">Name</label>
        <MyInput />
      </div>
      <div>
        <label htmlFor="Surname">Surname</label>
        <MyInput />
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <MyInput />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <MyInput />
      </div>
      <MyButton onClick={Click} />
    </div>
  );
};

export default Registration;
