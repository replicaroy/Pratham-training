import React from 'react'
import { Link } from 'react-router-dom'

export const Post = (post) => {
    const {id, title, body} = post
  return (
    <div>
      <Link to={id.toString()}><h3>{title}</h3></Link> 
       <p>{body}</p>
        </div>
  )
}
