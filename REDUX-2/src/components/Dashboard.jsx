import React from 'react'

const Dashboard = (props) => {
    const {count, setCount}= props;
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Dashboard