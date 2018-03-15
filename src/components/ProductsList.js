import React from "react";

const ProductsList = ({ title, children }) => (
  <table className="rwd-table">
    <tbody>
      <tr>
        <th>
          {title}
          &nbsp;({children.length})
        </th>
        <th>Qty</th>
        <th>Price</th>
      </tr>
      <tr>
        <br />
      </tr>
      {children}
    </tbody>
  </table>
);

export default ProductsList;
