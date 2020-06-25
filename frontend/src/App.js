import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/home"
import Blogs from "./pages/blogs"
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact >
        <HomePage></HomePage>
      </Route>
      <Route path="/blogs" >
        <Blogs></Blogs>
      </Route>
    </BrowserRouter>
  );
}

export default App;
