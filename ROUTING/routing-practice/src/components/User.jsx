import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);

  if (!users.length) return <p>Loading...</p>;

  return (
    <div>
      <h2>User List</h2>
      {users.map((u) => (
        <Link key={u.id} to={`/user/${u.id}`}>
          <p>{u.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default User;
