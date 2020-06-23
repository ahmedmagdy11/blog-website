import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/home"
function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <HomePage></HomePage>
      </Route>
    </BrowserRouter>
  );
}

export default App;
