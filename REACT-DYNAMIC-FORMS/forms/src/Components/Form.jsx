import React, { useState } from 'react';
import { FORM_FIELDS as fields } from './FormData';
import CustomInput from './CustomInput';
import CustomRadioGroup from './CustomRadioGroup';
import CustomSelectDropdown from './CustomDropdown';

function Form() {
const INTIAL_STATE ={
  firstname: '',
  lastName: '',
  role: '',
  gender: '',
  hobbies: '',
  subjects: ''
}

  const [formData, setFormData] = useState(INTIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData, 'formData');
  };

  return (
    <form onSubmit={handleSubmit} style={{border:'1px solid gray', borderRadius: 10, padding: 20,}}>
      {fields.map((field, index) => {
        if (field.type === 'text') {
          return (
            <CustomInput
              key={index}
              field={field}
              value={formData[field.name]}
              onChange={handleChange}
            />
          );
        } else if (field.type === 'radio') {
          return (
            <CustomRadioGroup
              key={index}
              field={field}
              value={formData[field.name]}
              onChange={handleChange}
            />
          );
        } else if (field.type === 'select') {
          return (
            <CustomSelectDropdown
              key={index}
              field={field}
              value={formData[field.name]}
              onChange={handleChange}
            />
          );
        } else {
          return null;
        }
      })}

      <button type="submit" 
      style={{width: '100%', padding: '10px 20px', border: 'none', borderRadius: '5px', 
            backgroundColor: '#007bff', color: 'white', cursor: 'pointer'}}>
        Submit
      </button>
    </form>
  );
}

export default Form;
