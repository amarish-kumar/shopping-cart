import React from "react";

const Cart = ({ items, total }) => {
  const hasProducts = items.length > 0;
  const nodes = hasProducts ? (
    items.map(item => (
      <div
        title={item.title}
        price={item.price}
        quantity={item.quantity}
        key={item.id}
      />
    ))
  ) : (
    <em>Please add some items to cart.</em>
  );

  return (
    <table className="cart-table" cellSpacing="0">
      <tbody>
        <tr>
          <td>Total</td>
        </tr>
        <tr>
          <td>Items(7) {items.length}</td>
          <td>: &#36;{total}</td>
        </tr>
        <tr>
          <td>Discount</td>
          <td>:{items.length ? `-$${3.0}` : `$${0.0}`}</td>
        </tr>
        <tr>
          <td>Type discount</td>
          <td>: &#36;-10.00</td>
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
