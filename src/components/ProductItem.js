import React from "react";
import Product from "./Product";

const ProductItem = ({ item, onAddToCartClicked }) => (
  <Product
    title={item.name}
    price={item.price}
    src={item.img_url}
    discount={item.discount}
  />
);

export default ProductItem;
