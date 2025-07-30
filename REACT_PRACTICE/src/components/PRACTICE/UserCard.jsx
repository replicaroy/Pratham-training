const UserCard = ({ user }) => {
  

  return (
    <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <h3>{user.name}</h3>
      <p> {user.age}</p>
      <p> {user.gender}</p>
    </div>
  );
};

export default UserCard;