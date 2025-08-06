import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserList } from "../CONTEXT/UserListProvider";

const INITIALFORM_VAL = {
  username: "",
  gender: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const SignUp = () => {
  const [formData, setFormData] = useState(INITIALFORM_VAL);
  const [errors, setErrors] = useState({});
  const { setUserList } = useUserList();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };



  const validate = (values) => {
    const err = {};
    if (!values.username.trim()) err.username = "Username is required";
    if (!values.email.trim()) err.email = "Email is required";
    if (!values.gender) err.gender = "Gender is required";
    if (!values.password) err.password = "Password is required";
    if (!values.confirmpassword)
      err.confirmpassword = "Confirm password is required";
    else if (values.password !== values.confirmpassword)
      err.confirmpassword = "Passwords do not match";
    return err;
  };

  const submitform = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formDataToSave = {
      ...formData,
      username: formData.username.trim().toLowerCase(),
    };

    setUserList((prev) => [...prev, formDataToSave]);
    setFormData(INITIALFORM_VAL);
    setErrors({});
    navigate("/Login");
  };

  return (
    <>
    <div className='flex justify-end items-center mt-4'>
      Already User ! Login Now.
      <button onClick={() => navigate('/Login')}
          className=" text-end bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 m-4 rounded-md transition"
        >          Login
        </button>
    </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form
        onSubmit={submitform}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>

        {/* Username */}
        <div>
          <label htmlFor="username" className="block mb-1 font-medium text-gray-700">
            User Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your username"
          />
          {errors.username && (
            <p className="text-red-600 mt-1 text-sm">{errors.username}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-600 mt-1 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Gender</label>
          <div className="flex space-x-6 text-gray-700">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="form-radio text-amber-500"
              />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="form-radio text-amber-500"
              />
              <span>Female</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={handleChange}
                className="form-radio text-amber-500"
              />
              <span>Other</span>
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-600 mt-1 text-sm">{errors.gender}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block mb-1 font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-600 mt-1 text-sm">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmpassword"
            className="block mb-1 font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
              errors.confirmpassword ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Confirm your password"
          />
          {errors.confirmpassword && (
            <p className="text-red-600 mt-1 text-sm">{errors.confirmpassword}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 transition text-white py-2 rounded-md font-semibold text-lg"
        >
          Submit
        </button>
      
      </form>
    </div>
    </>
  );
};

export default SignUp;
