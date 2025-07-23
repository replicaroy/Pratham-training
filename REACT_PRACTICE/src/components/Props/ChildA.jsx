import React from 'react'
import GrandChildA from './GrandChildA'

function ChildA(props) {
    console.log(props, 'childA')
  return (
    <>
    <div>
        <h1>This is Child A</h1>
        <h6>{props.heading}</h6>
        <p>{props.heading}</p>
    
<GrandChildA userData ={props.userProps}/>
    </div>
    </>
  )
}

export default ChildA