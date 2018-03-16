import React from "react";
import Product from "./Product";

const ProductItem = ({
  item,
  onAddToCartClicked,
  onDeleteFromCart,
  onItemDelete
}) => (
  <Product
    title={item.name}
    price={item.price}
    src={item.img_url}
    discount={item.discount}
    addToCart={onAddToCartClicked}
    deleteFromCart={onDeleteFromCart}
    itemDelete={onItemDelete}
  />
);

export default ProductItem;
