import React from "react";

const Cart = ({ items, total }) => {
  return (
    <table className="cart-table" cellSpacing="0">
      <tbody>
        <tr>
          <td>Total</td>
        </tr>
        <tr>
          <td>Items({items.length}) </td>
          <td>: &#36;{total}</td>
        </tr>
        <tr>
          <td>Discount</td>
          <td>:{items.length ? `-$${3.0}` : `$${0.0}`}</td>
        </tr>
        <tr>
          <td>Type discount</td>
          <td>: &#36;0.00</td>
        </tr>
        <tr>
          <td>Order Total</td>
          <td>:{items.length ? `$${total - 3}` : `$${0.0}`}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default Cart;
