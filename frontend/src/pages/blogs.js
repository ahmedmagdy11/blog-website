import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import LoadBlogs from "../components/loadBlogs";

const Blogs = () => {
  let history = useHistory();
  const link = useRef();
  const HandelAddBlog=()=>{
    history.push('/write');
  }
  
  return (
    <React.Fragment>
      <h1>all of my blogs</h1>
      <button onClick={HandelAddBlog}> add blogs</button>
      <LoadBlogs></LoadBlogs>
    </React.Fragment>
  );
};

export default Blogs
