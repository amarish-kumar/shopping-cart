import React from "react";

const ProductsList = ({ title, children }) => (
  <table className="rwd-table" cellSpacing="0">
    <tbody>
      <tr>
        <th>{title}</th>
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
