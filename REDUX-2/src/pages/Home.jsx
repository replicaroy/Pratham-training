import React, { useState } from 'react'
import Dashboard from '../components/Dashboard'
import Count from '../components/Count'

function Home() {
    // const [count,setCount] = useState(0)
  return (
    <>
       {/* <Dashboard  setCount={setCount}/> 
       <Count count={count}/>  */}
       <Count />
       <Dashboard />
    </>
  )
}

export default Home