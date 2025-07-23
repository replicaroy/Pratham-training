import React from 'react';

function CustomDropdown({ field, value, onChange }) {
  return (
    <div style={{ marginBottom: '16px', display: 'flex', gap: '30px' }}>
      <label style={{  marginBottom: '6px', fontWeight:'bold', color: '#727171ff' }}>{field.label}</label>
      <select
        name={field.name}
        value={value}
        onChange={onChange}
        style={{ padding: '8px', width: '260px' , borderRadius: '4px', border: '1px solid #ccc', color: '#727171ff' }}
      >
        <option value="">-- Select --</option>
        {field.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CustomDropdown;
