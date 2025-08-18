import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../redux/actions/countaction'
import './style.css';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user)
  const handleIncrement = () => {
    dispatch(increment());
  }
  const handleDecrement = () => {
    dispatch(decrement());
  }
  const handleReset = () => {
    dispatch(reset());
  }


  return (
    <>   
      <button  onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>   
      <button onClick={handleReset}>Reset</button> 
{/* 
      <button className="btn increment" onClick={handleIncrement}>Increment</button>
      <button className="btn decrement" onClick={handleDecrement}>Decrement</button>
      <button className="btn reset" onClick={handleReset}>Reset</button>   */}

      {user && <h3>Welcome, {user.email}</h3>}
      {user && <h3>Welcome, {user.password}</h3>}
      
    </>
  )
}

export default Dashboard





// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'


// const Dashboard = () => {
//     const user = useSelector(state => state.auth.user)
//     console.log('user', user)
//     const navigate = useNavigate()
//     const dispatchEvent = useDispatch()

//     const handleLogout = () => {
//      dispatchEvent(LogoutUser());
//      navigate('/')
//     }

//   return (
//     <>
//         <h4>This is your dashboard</h4>
//         <h3>Welcome, {user.name || 'Guest'}</h3>
//         <button 
//         onClick={handleLogout}
//        >Logout</button>
//     </>
//   )
// }

// export default Dashboard
