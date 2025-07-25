import { useState } from "react";

function Select(props) {
  const { optionsList, setLabel, setData, currentValue } = props;

  const [selecteValue, setSelectedValue] = useState(currentValue);

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setSelectedValue(value);
    setData(value);
  };

  return (
    <div>
      <label>{setLabel}</label>
      <select value={selecteValue} onChange={handleSelectChange}>
        <option value="">-- Select --</option>
        {optionsList.map((subject, index) => (
          <option key={subject} value={subject.toLowerCase()}>
            {subject}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
