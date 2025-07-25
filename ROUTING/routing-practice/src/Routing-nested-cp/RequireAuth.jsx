import React from 'react'
import Login from './Login';

function RequireAuth({children}) {
    const loggedin =  false;
    if (loggedin) {
        return children       
    }
    return <Login/>
  return (
    <div>RequireAuth</div>
  )
}

export default RequireAuth