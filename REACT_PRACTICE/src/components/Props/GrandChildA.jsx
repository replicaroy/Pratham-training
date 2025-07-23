import React from 'react'

function GrandChildA(props) {
  return (
   <div>
    <h1>This is GrandChild A</h1>
    <h6>{props.useData?.age}</h6>
   </div>
  )
}

export default GrandChildA