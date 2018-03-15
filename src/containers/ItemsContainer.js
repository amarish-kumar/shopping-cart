import React from "react";
import { connect } from "react-redux";
import { getVisibleItems } from "../reducers/items";
import ProductItem from "../components/ProductItem";
import ProductsList from "../components/ProductsList";

const ItemsContainer = ({ items }) => (
  <ProductsList title="Items">
    {items.map(item => (
      <ProductItem
        key={item.id}
        item={item}
        onAddToCartClicked={() => console.log(item.id)}
      />
    ))}
  </ProductsList>
);

const mapStateToProps = state => ({
  items: getVisibleItems(state.items)
});

export default connect(mapStateToProps)(ItemsContainer);
