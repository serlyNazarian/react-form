import React from "react";
import { useState } from "react";
import Form from "./form";

const List = () => {
  const [products, setProducts] = useState([]);
  function add(product) {
    setProducts([...products, product]);
  }

  return (
    <div>
      <Form add={add} />
      <div className="list-product">
        {products.map((item) => (
          <div className="item" key={item.id}>
            <h2>{item.name}</h2>
            <h3>{item.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
