import React from "react";

const ProductsList = ({ title, children, getAll }) => (
  <table className="rwd-table" cellSpacing="0">
    <tbody>
      <tr>
        <th>
          {title} ({children.length})
        </th>
        <th>Qty</th>
        <th>Price</th>
      </tr>
      <tr>
        <br />
      </tr>
      {children.length ? children : <button onClick={getAll}>Reload</button>}
    </tbody>
  </table>
);

export default ProductsList;
