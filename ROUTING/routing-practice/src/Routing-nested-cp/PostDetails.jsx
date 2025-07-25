import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'    

function PostDetails() {
  const { id } = useParams();  // Destructure id from params
  const [postDetails, setPostDetails] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);     
      const data = await res.json();
      setPostDetails(data);
    } catch (error) {
      console.error('Failed to fetch post:', error);
      setPostDetails(null);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, []);  

  if (!postDetails) return <div>Loading post details...</div>;

  return (
    <div>
        {postDetails &&
        
        <div>
          <h2>{postDetails.title}</h2>
          <p>{postDetails.body}</p>
        </div>    }
     
    </div>
  );
}

export default PostDetails;
