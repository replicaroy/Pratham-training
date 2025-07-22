import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const USERCARD = 
{ firstname: "", lastname: "", email: "", password: "",
  confirmpassword: '', age: '', role: '', gender: '', intrest: [] };

export const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(USERCARD);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };


  const handleIntrest = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setUser({ ...user, intrest: [...user.intrest, value] });
    } else {
      setUser({ ...user, intrest: user.intrest.filter((intrest) => intrest !== value) });
    }
  };

  const validate = () => {
    const errors = {};
    if (!user.firstname) errors.firstname = 'firstname is required';
    if (!user.lastname) errors.lastname = 'lastname is required';
    if (!user.email) errors.email = 'email is required';
    if (!user.password) errors.password = 'password is required';
    if (!user.confirmpassword) errors.confirmpassword = 'confirm password is required';
    if (user.password !== user.confirmpassword) errors.confirmpassword = 'Passwords do not match';
    if (!user.age) errors.age = 'age is required';
    if (!user.role) errors.role = 'role is required';
    if (!user.gender) errors.gender = 'gender is required';
    if (!user.intrest || user.intrest.length === 0) errors.intrest = 'interest is required';
    return errors;
  };

  const handleSubmit = (e) => {
    // const query = new URLSearchParams(user).toString();
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setError(true);
      return;
    }
    else{
      setData([...data, user]);
      setUser(USERCARD);
      setError(false);
      // navigate(`/dashboard?${query}`)
      navigate(`/dashboard?firstname=${user.firstname}&lastname=${user.lastname}&email=${user.email}&password=${user.password}&confirmpassword=${user.confirmpassword}&age=${user.age}&role=${user.role}&gender=${user.gender}&intrest=${user.intrest}`);
    }
  };

  return (
    <>
      <div className='usercard'>
        <h2>UserCards</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label>First Name:</label>
            <input type="text" name="firstname" value={user.firstname} onChange={handleChange} />
            {error && !user.firstname && <span className="error">firstname is required</span>}
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" name="lastname" value={user.lastname} onChange={handleChange} />
            {error && !user.lastname && <span className="error">lastname is required</span>}
          </div>
          <div>
            <label>Email:</label>
            <input type="text" name="email" value={user.email} onChange={handleChange} />
            {error && !user.email && <span className="error">email is required</span>}
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={user.password} onChange={handleChange} />
            {error && !user.password && <span className="error">password is required</span>}
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" name="confirmpassword" value={user.confirmpassword} onChange={handleChange} />
            {error && !user.confirmpassword && <span className="error">confirm your password</span>}
            {error && user.password !== user.confirmpassword && <span className="error">Passwords do not match</span>}
          </div>

          <div>
            <label>Age:</label>
            <input type="text" name="age" value={user.age} onChange={handleChange} />
            {error && !user.age && <span className="error">age field is required</span>}
          </div>


          <div className='gender'>
            <label>Gender</label>
            <select name="gender" value={user.gender} onChange={handleChange}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {error && !user.gender && <span className="error">gender is required</span>}
          </div>

          <div className='intrest'>
            <label>Interest:</label>
            Music
            <input type="checkbox" checked={user.intrest.includes('music')} value="music" onChange={handleIntrest} />
            Gym
            <input type="checkbox" checked={user.intrest.includes('gym')} value="gym" onChange={handleIntrest} />
            Play
            <input type="checkbox" checked={user.intrest.includes('play')} value="play" onChange={handleIntrest} />
            {error && (!user.intrest || user.intrest.length === 0) && <span className="error">interest is required</span>}
          </div>
          <div className='role'>
            <label>Role:</label>
            <span>Admin</span>
            <input type="radio" name="role" value="admin" checked={user.role === 'admin'} onChange={handleChange} />
             <span>Manager</span>
            <input type="radio" name="role" value="manager" checked={user.role === 'manager'} onChange={handleChange} />
              <span>Viewer</span>
            <input type="radio" name="role" value="viewer" checked={user.role === 'viewer'} onChange={handleChange} />
            {error && !user.role && <span className="error"> role field is required</span>}
          </div>

          <div className='btndiv'>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      {/* {data.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px', padding: '20px' }}>
          {data?.map((d, i) => (
            <div key={i} style={{ border: '1px solid black', borderRadius: 10, padding: 20 }}>
              <p>Firstname: {d?.firstname}</p>
              <p>Lastname: {d?.lastname}</p>
              <p>Email: {d?.email}</p>
              <p>Age: {d?.age}</p>
              <p>Role:{d?.role}</p>
              <p>Gender: {d?.gender}</p>
              <p>Interest: {d?.intrest}</p>
            </div>
          ))}
        </div>
      )} */}
    </>
  );
};
