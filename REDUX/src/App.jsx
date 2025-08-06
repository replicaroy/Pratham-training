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
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>


    </>
  )
}

export default App
