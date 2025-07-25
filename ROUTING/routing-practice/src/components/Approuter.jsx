import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import NewUser from './NewUser'
import Blogs from './Blogs'
import User from './User'
import UserDetails from './UserDetails'


function Approuter() {
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

export default Approuter