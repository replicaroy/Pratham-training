import React, { useState } from 'react';
import { formFields } from './formData';
import { validateForm } from './Utils';
import FieldRenderer from './FormFieldRenderer';

const SignUp = () => {
  const initialFormState = formFields.reduce((acc, field) => {
    acc[field.name] = field.type === 'checkbox' ? [] : '';
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submittedUsers, setSubmittedUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData, formFields);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedUsers([...submittedUsers, formData]);
    setFormData(initialFormState);
  };

  return (
    <>
      <div className="usercard">
        <h2>UserCards</h2>
        <form onSubmit={handleSubmit}>
          {formFields.map(field => (
            <FieldRenderer
              key={field.name}
              field={field}
              value={formData[field.name]}
              error={errors[field.name]}
              onChange={handleChange}
            />
          ))}
          <div className="btndiv">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      {submittedUsers.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(350px,1fr))', gap: '20px', padding: '20px' }}>
          {submittedUsers.map((user, idx) => (
            <div key={idx} style={{ border: '1px solid black', borderRadius: 10, padding: 20 }}>
              {formFields.map(f => (
                <p key={f.name}><strong>{f.label}:</strong> {Array.isArray(user[f.name]) ? user[f.name].join(', ') : user[f.name]}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SignUp;
