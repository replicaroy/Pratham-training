import React, { useState } from 'react';
import './UserCards.css';
import Cards from './PRACTICE/Cards';

const USERCARD = { firstname: "", lastname: "", email: "", password: "", age: '' };

const UserCards = () => {
  const [user, setUser] = useState(USERCARD);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!user.firstname) errors.firstname = 'firstname is required';
    if (!user.lastname) errors.lastname = 'lastname is required';
    if (!user.email) errors.email = 'email is required';
    if (!user.password) errors.password = 'password is required';
    if (!user.age) errors.age = 'age is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setError(true);
      return;
    }
    setData([...data, user]);
    setUser(USERCARD);
    setError(false);
  };

  return (
    <>
      <div className='usercard'>
        <h2>UserCards</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label>First Name:</label>
            <input type="text" name="firstname" value={user.firstname} onChange={handleChange} />
            {error && !user.firstname && <p className="error">firstname is required</p>}
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" name="lastname" value={user.lastname} onChange={handleChange} />
            {error && !user.lastname && <p className="error">lastname is required</p>}
          </div>
          <div>
            <label>Email:</label>
            <input type="text" name="email" value={user.email} onChange={handleChange} />
            {error && !user.email && <p className="error">email is required</p>}
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={user.password} onChange={handleChange} />
            {error && !user.password && <p className="error">password is required</p>}
          </div>
          <div>
            <label>Age:</label>
            <input type="text" name="age" value={user.age} onChange={handleChange} />
            {error && !user.age && <p className="error">age is required</p>}
          </div>
          <div className='btndiv'>
            <button type="submit">Add User</button>
          </div>
        </form>
      </div>

      {data.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px', padding: '20px' }}>
          {data.map((d, i) => (
            <Cards key={i} data={d} />
          ))}
        </div>
      )}
    </>
  );
};

export default UserCards;
