// CustomButton.js
import React from 'react';

function CustomButton({ field }) {
  return (
    <button type={field.buttonType || 'button'} style={field.style || {}}>
      {field.label}
    </button>
  );
}

export default CustomButton;
