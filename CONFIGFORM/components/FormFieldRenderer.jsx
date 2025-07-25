// FieldRenderer.jsx
import React from 'react';

const FieldRenderer = ({ field, value, error, onChange }) => {
  const { name, label, type, options } = field;

  switch (type) {
    case 'text':
    case 'email':
    case 'password':
    case 'number':
      return (
        <div className="form-control">
          <label>{label}:</label>
          <input
            type={type}
            name={name}
            value={value || ''}
            onChange={onChange}
          />
          {error && <span className="error">{error}</span>}
        </div>
      );
    case 'radio':
      return (
        <div className="form-control">
          <label>{label}:</label>
          {options.map(opt => (
            <label key={opt.value} style={{ marginLeft: 10 }}>
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={onChange}
              />
              {opt.label}
            </label>
          ))}
          {error && <div className="error">{error}</div>}
        </div>
      );
    case 'select':
      return (
        <div className="form-control">
          <label>{label}:</label>
          <select name={name} value={value || ''} onChange={onChange}>
            {options.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {error && <div className="error">{error}</div>}
        </div>
      );
    case 'checkbox':
      return (
        <div className="form-control">
          <label>{label}:</label>
          {options.map(opt => (
            <label key={opt.value} style={{ marginLeft: 10 }}>
              <input
                type="checkbox"
                name={name}
                value={opt.value}
                checked={value?.includes(opt.value) || false}
                onChange={(e) => {
                  const checked = e.target.checked;
                  if (checked) {
                    onChange({
                      target: {
                        name,
                        value: [...(value || []), opt.value],
                      },
                    });
                  } else {
                    onChange({
                      target: {
                        name,
                        value: (value || []).filter(v => v !== opt.value),
                      },
                    });
                  }
                }}
              />
              {opt.label}
            </label>
          ))}
          {error && <div className="error">{error}</div>}
        </div>
      );
    default:
      return null;
  }
};

export default FieldRenderer;
