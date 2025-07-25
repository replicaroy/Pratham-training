import React from 'react';

function CustomRadioGroup({ field, value, onChange }) {
  return (
    <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'row', gap: '8px' }}>
      <div><label style={{ marginBottom: '6px', fontWeight:'bold', color: '#727171ff', }}>{field.label}</label></div>
      {field.options.map((option, index) => (
        <label key={index} style={{}}>
          <input
            type="radio"
            name={field.name}
            value={option}
            checked={value === option}
            onChange={onChange}
            style={{  }}            
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default CustomRadioGroup;
