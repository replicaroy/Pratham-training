import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import NewUser from './components/NewUser'
import Blogs from './components/Blogs'
import UserDetails from './components/UserDetails'

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{display: 'flex', gap: 20}}>
        <Link to="/">Home</Link>  
        <Link to="/blogs">Blogs</Link>  
        <Link to="/newuser">New User</Link>  
        <Link to="/user">User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newuser" element={<NewUser />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
