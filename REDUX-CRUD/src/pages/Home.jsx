import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, deleteUser } from "../redux/actions";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User List</h1>
      <Link to="/add">Add User</Link>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            <Link to={`/edit/${user.id}`}>Edit</Link>
            <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
