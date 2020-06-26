import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/home"
import Blogs from "./pages/blogs"
import Write from "./pages/write";
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact >
        <HomePage></HomePage>
      </Route>
      <Route path="/blogs" >
        <Blogs></Blogs>
      </Route>
      <Route path="/write" >
        <Write></Write>
      </Route>
    </BrowserRouter>
  );
}

export default App;
