import React, { useState } from "react";

function Item({ name, category }) {
  // State to track if item is in the cart
  const [inCart, setInCart] = useState(false);

  // Toggle handler
  function handleCartClick() {
    setInCart((prevState) => !prevState);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartClick} className={inCart ? "remove" : "add"}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
