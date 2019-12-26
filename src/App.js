import React from "react";
import { BrowserRouter } from "react-router-dom";
import ProductPage from "./ProductPage";

function App() {
  return (
    <div>
      {/* <h3>App Page</h3> */}
      <BrowserRouter>
        <ProductPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
