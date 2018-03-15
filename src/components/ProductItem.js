import React from "react";
import Product from "./Product";

const ProductItem = ({ item }) => (
  <div style={{ marginBottom: 20 }}>
    <Product title={item.name} price={item.price} discount={item.discount} />
  </div>
);

export default ProductItem;
