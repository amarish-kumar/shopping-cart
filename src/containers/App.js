import React from "react";
import CartContainer from "./CartContainer";
import ItemsContainer from "./ItemsContainer";

const App = () => (
  <div className="shopping-container">
    <div className="item-container">
      <span>
        {" "}
        <i style={{ fontSize: "24px" }} className="fa">
          &#xf104;
        </i>
        <h1>Order Summary </h1>
      </span>
      <ItemsContainer />
    </div>
    <div className="cart-container">
      <CartContainer />
    </div>
  </div>
);

export default App;
