import React from 'react'
import { useUser } from '../context/UserContext/UserProvider'
import { Link, useNavigate } from 'react-router-dom'
import { usePost } from '../context/UserContext/PostProvider'
import { useEffect } from 'react'

const DashBoard = () => {
    const {user} = useUser()
    const {post,setPost} = usePost()
    const navigate = useNavigate()

    async function getData(){
       const getPost = await fetch('https://jsonplaceholder.typicode.com/posts')
       const data = await getPost.json()
       setPost(data)
    }

    const goToPost = ()=> {
        navigate('/secure/Post')
    }  
  return (
    <div>
     
        <h1>Dashboard</h1>
        <h2>Welcome {user.name}</h2>
        <h2>Email: {user.email}</h2>

        <button onClick={getData} >Get Data</button>
      <button onClick={goToPost} disabled={!post || post.length === 0}>
  Go to Post
</button>
    </div>
  )
}

export default DashBoard

