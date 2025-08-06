import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const Dashboard = () => {
    const user = useSelector(state => state.auth.user)
    console.log('user', user)
    const navigate = useNavigate()
    const dispatchEvent = useDispatch()

    const handleLogout = () => {
     dispatchEvent(LogoutUser());
     navigate('/')
    }

  return (
    <>
        <h4>This is your dashboard</h4>
        <h3>Welcome, {user.name || 'Guest'}</h3>
        <button 
        onClick={handleLogout}
       >Logout</button>
    </>
  )
}

export default Dashboard