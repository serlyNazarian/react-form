import React from "react";
import { useState } from "react";

const Form = ({ add }) => {
  const [name, setName] = useState({
    name: "",
    price: "",
  });
  function addPr() {
    let pr = { id: Date.now(), name: name.name, price: name.price };
    add(pr);
    setName({
      name: "",
      price: "",
    });
  }
  const changeInfo = (e) => {           
    setName({
      ...name,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div>
      <div className="registration">
        <div className="add-form">
          <input
            type="text"
            id="name"
            value={name.name}
            onChange={changeInfo}
          />
          <input
            type="text"
            id="price"
            value={name.price}
            onChange={changeInfo}
          />
          <button onClick={addPr}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
