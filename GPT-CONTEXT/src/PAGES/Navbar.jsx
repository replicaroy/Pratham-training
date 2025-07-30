import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <ul style={{display:"flex", gap:"20px", listStyle:"none"}} >
              <li>
                  <Link to={"/post"}>Post data</Link>
              </li>
              <li>
                  <Link to={"/createpost"}>create Post</Link>
              </li>
          </ul>
      </div>
  );
}

export default Navbar