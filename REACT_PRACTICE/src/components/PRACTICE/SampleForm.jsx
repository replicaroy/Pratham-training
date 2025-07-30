import { useState } from "react";


const SampleForm = () => {

    const intialValue ={
    username: "",
    email: "",
    password: "",
  }
  const [form, setform] = useState(intialValue);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // setform(intialValue)
  };

  return (
    <>
    <div>
      <h1> SampleForm</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>


<ul></ul>
    <p>username: {form.username}</p>
    <p>username: {form.email}</p>
    <p>username: {form.password}</p>

    </>
  );
};

export default SampleForm;

// import React, { useState } from "react";

// const SampleForm = () => {
//   const [form, setForm] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log(form)
//   };

//   return (
//     <div>
//       <h1>Sample Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input  type="text"   name="username"  value={form.username}  onChange={handleChange}             />
//         </div>
//         <div>
//           <input
//             type="email"   name="email"  value={form.email}  onChange={handleChange}
//           />
//         </div>
//         <div>
//           <input
//             type="password"  name="password"  value={form.password}  onChange={handleChange}

//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default SampleForm;
