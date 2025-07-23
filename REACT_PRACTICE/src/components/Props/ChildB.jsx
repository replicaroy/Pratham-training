import React from 'react'

function ChildB(props) {
    const {setUserdetails}=props;
  return (
    <div>
        <h1>This is Child B</h1>
        <h6>{props.setUserdetails?.name}</h6>

        <button onClick={()=> setUserdetails({name: 'REX', age: '25'})}>SET USER DATA</button>

    </div>
  )
}

export default ChildB