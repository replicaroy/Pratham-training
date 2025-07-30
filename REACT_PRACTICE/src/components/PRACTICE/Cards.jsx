const Cards =({ data }) =>{
  return (
    <div style={{ border: '1px solid black', borderRadius: 10, padding: 20 }}>
      <p><strong>Firstname:</strong> {data.firstname}</p>
      <p><strong>Lastname:</strong> {data.lastname}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Password:</strong> {data.password}</p>
      <p><strong>Age:</strong> {data.age}</p>
    </div>
  );
}

export default Cards;
