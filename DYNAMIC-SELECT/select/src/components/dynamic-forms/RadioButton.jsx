import React from "react";
import { useState } from "react";

function RadioButton(props) {
  const { optionsList, setLabel, setData, name, currentValue } = props;

  const [selecteValue, setSelectedValue] = useState(currentValue);

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setSelectedValue(value);
    setData(value);
  };
  return (
    <>
      <label>{setLabel}</label>
      {optionsList.map((options, index) => (
        <div key={index}>
          <input type="radio" name={name}
           value={options} 
           onChange={handleSelectChange} 
           checked={selecteValue === options} />
          <label>{options}</label>
        </div>
      ))}
    </>
  );
}

export default RadioButton;
