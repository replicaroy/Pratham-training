import React from 'react'
import { useState } from 'react'
import ChildB from './GrandChildB'
import ChildA from './ChildA'

export const Home = () => {
  const [user, setUser] = useState({})
  return (
<>
<div>
  <ChildA heading={'this is my prop from home'} userProps={user}/>
  <ChildB userDetails={user} setUserDetails = {setUser} username = {user.name}/>
</div>

</>
  )
}

