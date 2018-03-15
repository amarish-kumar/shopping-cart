import React from "react";
import { Segment } from "semantic-ui-react";
const Product = ({ price, title, discount, src }) => (
  <tr>
    <td data-th="Items">
      <Segment compact>
        <div className="item-description">
          <img src={src} style={{ height: "35px" }} alt="item" />
          {title}
        </div>
        <div className="item-delete">X</div>
      </Segment>
    </td>
    <td data-th="Qty">
      <div>-</div>
      <Segment compact className="count">
        1
      </Segment>
      <div>+</div>
    </td>
    <td data-th="Price"> &#36;{price}</td>
  </tr>
);

export default Product;
