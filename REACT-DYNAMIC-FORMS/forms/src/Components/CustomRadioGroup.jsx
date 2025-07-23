import React from 'react';

function CustomRadioGroup({ field, value, onChange }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label style={{ marginBottom: '6px', fontWeight:'bold', color: '#727171ff' }}>{field.label}</label>
      {field.options.map((option, index) => (
        <label key={index} style={{ marginRight: '15px', }}>
          <input
            type="radio"
            name={field.name}
            value={option}
            checked={value === option}
            onChange={onChange}
            style={{ marginRight: '5px',  }}            
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default CustomRadioGroup;
