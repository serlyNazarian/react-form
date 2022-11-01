import React, { useState } from "react";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([{ id: 1, name: "Hecaniv" }]);
  const [info, setInfo] = useState({
    name: " ",
    price: " ",
  });
  function changed(e) {
    setInfo({
      ...info,
      [e.target.id]: e.target.value,
    });
  }
  function eventHandler() {
    let pr = { id: Date.now(), name: info.name, price: info.price };
    setProducts([pr, ...products]);
  }
  return (
    <div>
      <div className="add-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" id="name" onChange={changed} />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="text" id="price" onChange={changed} />
        </div>
        <div className="form-group">
          <button onClick={eventHandler}>Add</button>
        </div>
      </div>
      <div className="products">
        {products.map((item) => (
          <div className="item" key={item.id}>
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
