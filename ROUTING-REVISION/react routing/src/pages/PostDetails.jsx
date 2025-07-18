import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const [data, setData] = useState(null); // better to initialize as null
  const { postid } = useParams();
  

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`);
        const postData = await res.json();
        setData(postData);
        console.log(postData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPost();
  }, [postid]);



return (
    
  data ? (
    <div style={{ border: '1px solid #232323', padding: 10 }}>
      <h1>Post Details : {postid}</h1>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  ) : (
    <p>Loading...</p>
  )
);

};

export default PostDetails;
