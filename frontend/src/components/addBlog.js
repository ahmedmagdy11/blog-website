import React, { useRef } from "react";

const AddBlog = () => {
  const title = useRef();
  const blog = useRef();

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
    <form onSubmit={handelSubmit}>
      <input required type="text" placeholder="Title" ref={title} />
      <textarea
        required
        name="blog"
        placeholder="write your blog here"
        ref={blog}
      ></textarea>
      <button type="submit">add article</button>
    </form>
  );
};

export default AddBlog;
