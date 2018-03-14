import React from "react";
import CartContainer from "./CartContainer";
import ItemsContainer from "./ItemsContainer";

const App = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <hr />
    <h2>
      <CartContainer />
    </h2>
    <hr />
    <h3>
      <ItemsContainer />
    </h3>
  </div>
);

export default App;
