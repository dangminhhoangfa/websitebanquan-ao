import React from "react";

const Product = (props) => {
  return (
    <div className="product">
      <h3>{props.name}</h3>
      <p>Giá: {props.price} VNĐ</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Product;
