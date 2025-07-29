import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State for Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle handler
  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  // Class for dark/light mode
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
