import React from "react";
import { Segment } from "semantic-ui-react";
const Product = ({
  price,
  title,
  discount,
  src,
  addToCart,
  deleteFromCart,
  itemDelete
}) => (
  <tr>
    <td data-th="Items">
      <Segment compact>
        <div className="item-description">
          <img src={src} style={{ height: "35px" }} alt="item" />
          {title}
        </div>
        <div className="item-delete" onClick={itemDelete}>
          X
        </div>
      </Segment>
    </td>
    <td data-th="Qty">
      <div onClick={deleteFromCart}>-</div>
      <Segment compact className="count">
        1
      </Segment>
      <div onClick={addToCart}>+</div>
    </td>
    <td data-th="Price"> &#36;{price}</td>
  </tr>
);

export default Product;
