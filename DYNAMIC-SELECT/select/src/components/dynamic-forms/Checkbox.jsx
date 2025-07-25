import React from 'react'

function Checkbox() {
  return (
    <div>Checkbox</div>
  )
}

export default Checkbox























// import { useState } from 'react';

// function Checkbox({ optionsList, setLabel, setData, name, currentValue }) {
//   const [selectedValues, setSelectedValues] = useState(currentValue || []);

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     let updatedValues;

//     if (checked) {
//       updatedValues = [...selectedValues, value];
//     } else {
//       updatedValues = selectedValues.filter((item) => item !== value);
//     }

//     setSelectedValues(updatedValues);
//     setData(updatedValues); 
//   };

//   return (
//     <>
//       <label>{setLabel}</label>
//       {optionsList.map((option, index) => (
//         <div key={index}>
//           <input
//             type="checkbox"
//             name={name}
//             value={option}
//             checked={selectedValues.includes(option)}
//             onChange={handleCheckboxChange}
//           />
//           <label>{option}</label>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Checkbox;
