import React from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import { getTotal, getCartItems } from "../reducers";

const CartContainer = ({ items, total }) => (
  <Cart items={items} total={total} />
);

const mapStateToProps = state => ({
  items: getCartItems(state),
  total: getTotal(state)
});

export default connect(mapStateToProps)(CartContainer);
