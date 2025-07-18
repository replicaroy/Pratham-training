import React, { useEffect, useState } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);

  const fetchUser = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data, 'data');
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div>
        {data.map((user,i) => (
          <div key={i} style={{ margin: '10px', padding: '10px' }}>        
          <button><p>{user.name}</p></button>                     
          </div>
        ))}       
      </div>

      
    </>
  );
};

export default FetchData;
