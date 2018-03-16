import React from "react";
import { connect } from "react-redux";
import { getVisibleItems } from "../reducers/items";
import { addToCart, deleteFromCart, deleteItem } from "../actions";
import ProductItem from "../components/ProductItem";
import ProductsList from "../components/ProductsList";
import { ToastContainer, toast } from "react-toastify";

const ItemsContainer = ({ items, addToCart, deleteFromCart, deleteItem }) => {
  const options = {
    autoClose: 2000
  };

  const createNotification = (id, name) => {
    deleteItem(id);
    toast(`${name} deleted`, options);
  };

  return (
    <ProductsList title="Items">
      {items.map(item => (
        <ProductItem
          key={item.id}
          item={item}
          onAddToCartClicked={() => addToCart(item.id)}
          onDeleteFromCart={() => deleteFromCart(item.id)}
          onItemDelete={() => createNotification(item.id, item.name)}
        />
      ))}
      <ToastContainer />
    </ProductsList>
  );
};

const mapStateToProps = state => ({
  items: getVisibleItems(state.items)
});

export default connect(mapStateToProps, {
  addToCart,
  deleteFromCart,
  deleteItem
})(ItemsContainer);
