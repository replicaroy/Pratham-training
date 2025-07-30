import React from 'react'
import { useUser } from './context/UserContext/UserProvider'
import { useNavigate } from 'react-router-dom'  
import { useState } from 'react'

const INITIAL_FORM_VALUE = {
    name: '', email : '', password: '', phone: ''
}

export const UserRegistration = () => {
    const {user,setUser} = useUser()
    const navigate = useNavigate()
    const [formData, setFormData] = useState(INITIAL_FORM_VALUE);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({...formData});
        navigate('secure/DashBoard');
    }
  return (
   <>
   
   <form onSubmit={handleSubmit}>
    <div>
    <input  type="text"  name="name"  value={formData.name}  onChange={handleChange} /> <br />
    <input  type="text"  name="email" value={formData.email} onChange={handleChange} /> <br />
    <button type="submit">Submit</button > 
    </div>
    </form>   
   </>
  )
}
