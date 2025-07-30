import React from "react";
import { usePost } from "../context/UserContext/PostProvider";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Post = () => {
  const { post } = usePost();

  console.log(post, "post component");

  return (
   <div>


  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px', 
      padding: '16px',
    }}
  >
    {post &&
      post.map((item) => (
        <div
          key={item.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '12px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h5>{item.title}</h5>
          <p>{item.body}</p>
        </div>
      ))}
  </div>
</div>

  );
};

export default Post;
