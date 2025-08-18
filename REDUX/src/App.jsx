import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/actions/countaction'
import { use } from 'react'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Count from './components/Count'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'


function App() {
const count = useSelector(state => state.count);
const dispatch = useDispatch();

  return (
    <>
      {/* <div>
     <button onClick={()=> dispatch(increment())} >Increment</button>
     <button onClick={()=> dispatch(decrement())} >Decrement</button>        
      </div>    
      {count}   */}
      <Routes>
        <Route path='/' element={<UserLogin/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        {/* <Route path='/login' element={<UserLogin/>} /> */}
      </Routes>
{/* <Home/> */}

    </>
  )
}

export default App
