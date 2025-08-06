import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../redux/actions/authActions'

const initialState = {
    fname: "",
    password: ""
}
const Login = () => {
    const [formData, setFormData] = useState(initialState)
    const [data, setData] = useState([])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // setData((prev)=> ([...prev, formData]))
        // setData((prev)=> ([...prev, formData]))
        if(formData.fname === "admin" && formData.password === "admin"){
            const user = {
                name:  formData.fname,
                email: "admin@example.com"
            }
            dispatch(loginUser(user))     
            navigate('/dashboard')
        }
        else{
            console.log('Invalie credentials');
            
        }
    }
    
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name='fname' id='fname' placeholder='Enter First Name' value={formData.fname} onChange={handleChange} />        
        <input type="text" name='password' id='password' placeholder='Enter Password' value={formData.password} onChange={handleChange} />
        <input type="submit" value="Login" />
    </form>

    {data && data.map((item, index)=> {
        return(
            <div key={index}>
                <p>{item.fname}</p>
                <p>{item.password}</p>
            </div>
        )
    })}
        
    </>
  )
}

export default Login