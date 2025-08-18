
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/actions/authActions";

const UserLogin = () => {

 const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const dispatch = useDispatch()
const navigate=useNavigate()

 const _handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "email") {
           setEmail(value);
      } else if (name === "password") {
           setPassword(value);
      }
 };

 const _handleSubmit = (e) => {
     e.preventDefault();
    if(email === "helloadmin@gmail.com" && password === "admin999"){
        const user = {
            email:  'hello@gmail.com',
            password: "1234"
        }
        dispatch(loginUser(user))
        navigate('/dashboard')
     
    }
    else{
        console.log('Invalid credentialsssssssssss');
    }

    //   console.log("Username:", username);
    //  console.log("Password:", password);
    //  setEmail('');
    //  setPassword('');
 };

 return (
      <div>
           <h3>Login Form</h3>
           <form onSubmit={_handleSubmit}>
                <div>
                     <label>Username:</label>
                     <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={_handleChange}
                     />
                </div>
                <div>
                     <label>Password:</label>
                     <input
                          type="password"
                          name="password"
                          value={password}
                          onChange={_handleChange}
                     />
                </div>
                <div>
                     <button type="submit">Submit</button>
                </div>
           </form>
      </div>
 );
};

export default UserLogin;