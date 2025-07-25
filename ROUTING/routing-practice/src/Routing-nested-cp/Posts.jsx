import { useEffect, useState } from "react";
import { Post } from "./Post";

const endpoint = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchPosts() {
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error('Failed to fetch posts:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Posts Page</h1>
      {posts && posts?.map((post, index)=> (
        <div key={index}>
        <Post {...post}/>
        </div>
      ))}

      {/* {posts.map(post => (
        <div style={{border: '1px solid',borderRadius: '10px', padding: '20px',  margin: '10px'}}
         key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))} */}

    </div>
  );
}

export default Posts;
