import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FetchData = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {data.map((user) => (
        <div key={user.id} style={{ margin: '10px', padding: '10px' }}>
          <button onClick={() => navigate(`/user/${user.id}`)}>
            {user.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
