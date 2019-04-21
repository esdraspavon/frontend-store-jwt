import React from "react";
import { Link } from "react-router-dom";

const Product = props => {
  const { image, name, price, id } = props.data;
  return (
    <li>
      <img src={`img/${image}.png`} alt={name} />
      <p>
        {name} <span>$ {price}</span>
      </p>
      <Link to={`/producto/${id}`}>Más información</Link>
    </li>
  );
};

export default Product;
