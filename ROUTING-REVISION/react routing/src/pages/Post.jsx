import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Post List</h2>

      {/* {posts && posts.map((p, i)=> (
        <>
        <div style={{border: '1px solid black', margin: '10px', padding: '20px'}}>
        <p>UserId: {p.userId}</p>
        <p>Title: {p.title}</p>
        <p>Body:{p.body}</p>
        </div>
        </>
      ))} */}

      <div>
        {posts.length ? (
          <ul>
            {posts.map((p) => (       
              <li
                key={p.id}
                style={{ padding: "8px 0", cursor:'pointer', border: '1px solid #232323',padding: 10, margin:10, listStyle: 'none' }}
                onClick={() => navigate(`/post/${p.userId}?userId=${p.userId}`)}
              >
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        ) : (<p>Loading...</p> )}
      </div>

      {/* {posts.map((p) => (
        <Link key={p.id} to={`/posts/${p.useId}`}>
          <p>{p.name}</p>
        </Link>
      ))} */}
    </div>
  );
};

export default Post;
