import React from "react";

const Product = ({ price, title, discount }) => (
  <div>
    {title} - &#36;{price}
    <br />
    {discount}
  </div>
);

export default Product;
