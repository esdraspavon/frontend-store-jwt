import React from "react";
import "./css/ProductDetail.css";
const ProductDetail = props => {
  const { image, name, price, description } = props.product;
  if (!image) return null;
  return (
    <div className="info-producto">
      <div className="imagen">
        <img src={`/img/${image}.png`} alt={name} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <p className="precio">$ {price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
