import React from 'react'
import { useState } from 'react'
import DynamicSelect from './DynamicSelect'

const CITIES = [  'Mumbai',  'Delhi',  'Bangalore',  'Hyderabad',  'Chennai',  'Kolkata',  'Pune',  'Ahmedabad',  'Jaipur',  'Lucknow'];
const HOBBIES = ['Gyming', 'Running', 'Swimming', 'Reading', 'Writing', 'Coding', 'Gaming', 'Cooking', 'Hiking', 'Cycling']
function SelectHome() {

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        hobbies:''
    })
console.log(formData , 'fprmDatat');

  return (    
   <form >
    <input type="text" /> <br /> <br />
    <input type="radio" /> <br /> <br />
    <DynamicSelect cities={CITIES} setHobby = {(updatatedHobby) =>  setFormData({
        ...formData,
        hobbies: updatatedHobby
    })}/>
   </form>
  )
}

export default SelectHome