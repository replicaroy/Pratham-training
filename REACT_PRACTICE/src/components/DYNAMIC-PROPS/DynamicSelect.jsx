import React from 'react'
import { useState } from 'react';



function DynamicSelect({setHobby,cities}) { 
    const [selectedValue, setSelectedValue] = useState('')

    const handleSelectedChange = (e)=>{
        const {value} = e.target;
        setSelectedValue(value)
        setHobby(value)   
    }
  return (
    <div>
       <select value={selectedValue} onChange={handleSelectedChange} name='select'>
           <option value="">-- Select a hobby --</option>
        {cities.map((hobby, index)=> (
            <option key={index} value={hobby.toLocaleLowerCase()} >
                {hobby}
            </option>
        ))}
       </select>
    </div>
  )
}

export default DynamicSelect