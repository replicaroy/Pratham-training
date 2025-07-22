import React, { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value)
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('vlaue saved', name);
  };    
  

  return (
    <div>
      <h1>Controlled Form </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text" name="user" id="user" vlaue="name" onChange={handleChange}
        />
        <button>Save</button>
      </form>
    </div>
  );
};

export default ControlledForm;
