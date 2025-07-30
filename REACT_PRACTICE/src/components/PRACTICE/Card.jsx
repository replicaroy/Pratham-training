
import React, { use, useState } from 'react'

const Card = ({text, changeText}) => {
    const [color, setColor] = useState("red");

    const changeTexts = ()=> {
       changeText()
    }
 

  return (
    <>
    <div style={{width:"200px",height:"200px",backgroundColor:`${color}`, border: '1px solid gray'}}>
        {text}
    </div>
    <button onClick={()=> setColor(color =='red' ? 'white' : 'red')}>Change Color</button>

    <button style={{display: 'block'}} onClick={changeTexts}>Change Text</button>
    </>   

  )
}

export default Card