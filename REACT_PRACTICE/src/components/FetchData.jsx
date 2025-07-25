import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchData = () => {
  const [data, setData] = useState([]);

  // const fetchUser = async () => {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const data = await response.json();
  //     console.log(data, 'data');
  //     setData(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

//  const fetchUser = async () => {
//   try {
//     const res = await axios.get('https://jsonplaceholder.typicode.com/users');
//     console.log(res);
//     if(response.status === 200){
//       setData(res.data);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

const payload = {
   
        name: 'ram',
        email: 'XXXXXXXXXXXXXXXXX',
        age: 25,
    
}

 const fetchUser = async () => {
  try {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users',payload);
    console.log(res);
    if(response.status === 200){
      setData(res.data);
    }
  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div>
        {data.map((user,i) => (
          <div key={i} style={{ }}>        
         <p>{user.name}</p>                    
          </div>
        ))}       
      </div>

      
    </>
  );
};

export default FetchData;
