// utils.js

// Validate based on config & user data
export const validateForm = (formData, fieldsConfig) => {
  const errors = {};
  
  fieldsConfig.forEach(field => {
    const val = formData[field.name];
    if (field.required) {
      if (field.type === 'checkbox') {
        if (!val || val.length === 0) errors[field.name] = `${field.label} is required`;
      } else if (!val) {
        errors[field.name] = `${field.label} is required`;
      }
    }
    if (field.confirmWith) {
      if (val !== formData[field.confirmWith]) {
        errors[field.name] = `${field.label} does not match`;
      }
    }
  });
  return errors;
};
