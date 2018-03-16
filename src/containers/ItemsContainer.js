import React from "react";
import { connect } from "react-redux";
import { getVisibleItems } from "../reducers/items";
import { addToCart, deleteFromCart, deleteItem, getAllItems } from "../actions";
import { getCartItems } from "../reducers";
import ProductItem from "../components/ProductItem";
import ProductsList from "../components/ProductsList";
import { ToastContainer, toast } from "react-toastify";

const ItemsContainer = ({
  items,
  addToCart,
  deleteFromCart,
  deleteItem,
  cart,
  getAllItems
}) => {
  const options = {
    autoClose: 2000
  };

  const createNotification = (id, name) => {
    deleteItem(id);
    toast(`${name} deleted`, options);
  };

  return (
    <div>
      <ProductsList title="Items" getAll={() => getAllItems()}>
        {items.map(item => (
          <ProductItem
            key={item.id}
            item={item}
            cart={cart}
            onAddToCartClicked={() => addToCart(item.id)}
            onDeleteFromCart={() => deleteFromCart(item.id)}
            onItemDelete={() => createNotification(item.id, item.name)}
          />
        ))}
      </ProductsList>
      <ToastContainer />
    </div>
  );
};

const mapStateToProps = state => ({
  cart: getCartItems(state),
  items: getVisibleItems(state.items)
});

export default connect(mapStateToProps, {
  addToCart,
  deleteFromCart,
  deleteItem,
  getAllItems
})(ItemsContainer);
