import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import PostDetails from './pages/PostDetails'
import Post from './pages/Post'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{display: 'flex', gap: 20}}>
        <Link to="/">Home</Link>  
        <Link to="/blogs">Blogs</Link>  
        <Link to="/about">About</Link>  
        <Link to="/post">Post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:postid" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

