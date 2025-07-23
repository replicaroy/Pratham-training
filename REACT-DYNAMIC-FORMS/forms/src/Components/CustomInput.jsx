import React from 'react';

function CustomInput({ field, value, onChange }) {
  return (
    <div style={{ marginBottom: '16px' , display: 'flex', gap: '30px'}}>
      <label style={{  marginBottom: '6px' , fontWeight: 'bold', color: '#727171ff'}}>{field.label}</label>
      <input
        type="text"
        name={field.name}
        placeholder={field.placeholder}
        value={value}
        onChange={onChange}
        style={{ padding: '8px', width: '250px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
}

export default CustomInput;
