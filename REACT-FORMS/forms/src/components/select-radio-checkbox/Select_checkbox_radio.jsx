import React, { useState } from 'react';
import './SelectCheckboxRadio.css';

const INITIALVAL = { description: '', gender: '', shift: '', hobbies: [] };

const SelectCheckboxRadio = () => {
  const [formData, setFormData] = useState(INITIALVAL);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, hobbies: [...formData.hobbies, value] });
    } else {
      setFormData({ ...formData, hobbies: formData.hobbies.filter(hobby => hobby !== value) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(formData);
    setFormData(INITIALVAL)  
  };

  return (
    <>
      <div >

        <form onSubmit={handleSubmit}>
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleFieldChange}
            placeholder="Enter description"
          /> <br />

          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleFieldChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select> <br /> <br />

       
            <div>Shift</div>
            <label>
              <input type="radio" name="shift" value="morning" checked={formData.shift === 'morning'} onChange={handleFieldChange} />
              Morning
            </label>
            <label>
              <input type="radio" name="shift" value="evening" checked={formData.shift === 'evening'} onChange={handleFieldChange} />
              Evening
            </label>   <br /> <br />
         

     
            <div>Hobbies</div>
            <label>
              Music
              <input type="checkbox" value="music" checked={formData.hobbies.includes('music')} onChange={handleSelectChange} />
            </label>
            <label>
              Gym
              <input type="checkbox" value="gym" checked={formData.hobbies.includes('gym')} onChange={handleSelectChange} />
            </label>
            <label>
              Gardening
              <input type="checkbox" value="gardening" checked={formData.hobbies.includes('gardening')} onChange={handleSelectChange} />
            </label>
       

          <button type="submit">Submit</button>
        </form>

      
      </div>
    </>
  );
};

export default SelectCheckboxRadio;
