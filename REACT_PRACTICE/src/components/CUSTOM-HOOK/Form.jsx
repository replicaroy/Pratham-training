import React, { useState } from "react";
import useForm from "./useForm";
import { useUser } from "../CONTEXT-API/UseContext";



 function Form() {
  const { user, setUser } = useUser()
  const initialForm = {
    firstName: '',
    lastName: '',
    gender: ''
  };

  const { values, handleChange } = useForm(initialForm);
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, values]);
    console.log("Submitted:", values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={values.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={values.gender === "female"}
            onChange={handleChange}
          />
          Female
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h3>Submitted Data:</h3>
        <pre>{data?.map((d)=> (
            <p>{d.firstName}</p>
        ))}</pre>
      </div>
    </div>
  );
}
export default  Form;