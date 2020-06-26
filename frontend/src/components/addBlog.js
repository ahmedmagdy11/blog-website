import React, { useRef, useState } from "react";
import ReactMarkDown from "react-markdown";
const AddBlog = () => {
  const title = useRef();
  const blog = useRef();
  const [markDown , setMarkDown] = useState(``);
  const [header, setHeader] = useState(``);
  const handelOnChange=()=>{
    setMarkDown(blog.current.value);
  }; 
  const onTitleChange=()=>{
    setHeader(title.current.value)
  }
  const handelSubmit = async (event) => {
    event.preventDefault();
    const body = {
      blog: blog.current.value,
      title: title.current.value, 
    };
    console.log(body);
    const response = await fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status == 200) {
      console.log("sucess");
    } else {
      console.log("server Error");
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handelSubmit}>
        <input required type="text" placeholder="Title" ref={title} 
        onChange={onTitleChange}/>
        <br />{" "}
        <textarea
          required
          name="blog"
          placeholder="write your blog here"
          ref={blog}
          onChange={handelOnChange}
        />{" "}
        <br />
        <button type="submit">add article</button>
      </form>
      <h1>{header}</h1>
      <ReactMarkDown source={markDown} />
    </React.Fragment>
  );
};

export default AddBlog;
