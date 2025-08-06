import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserList } from '../CONTEXT/UserListProvider';
import { useLogin } from '../CONTEXT/LoginUserProvider';
import toast, { Toaster } from 'react-hot-toast';

const INITIALFORM_VAL = {
  email: '',
  password: ''
};

const Login = () => {
  const { userList } = useUserList();
  const { setUserLogin } = useLogin();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(INITIALFORM_VAL);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: ''
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  const submitform = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const emailToCheck = formData.email.trim().toLowerCase();
    const matchedUser = userList.find(
      (user) =>
        user.email.trim().toLowerCase() === emailToCheck &&
        user.password === formData.password
    );

    if (matchedUser) {
      setUserLogin(matchedUser);
      toast.success('Login successful!');
      navigate('/Post');
      setFormData(INITIALFORM_VAL); // Reset form only on successful login
    } else {
      setErrors({ form: 'Invalid email or password' });
    }
  };

  return (
    <>
    <div className='flex justify-end items-center mt-4'>
      Don't have Account ! Sign Up Now 
      <button onClick={() => navigate('/SignUp')}
          className=" text-end bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 m-4 rounded-md transition"
        >
          Signup
        </button>
    </div>
       
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Toaster position="top-center" />
      <form
        onSubmit={submitform}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        noValidate
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Login
        </h2>

        <label className="block mb-1 font-medium text-gray-700">Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 
          ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-400'}`}
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mb-2">{errors.email}</p>
        )}

        <label className="block mb-1 font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2
          ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-400'}`}
          placeholder="Enter your password"
        />
        {errors.password && (
          <p className="text-red-600 text-sm mb-2">{errors.password}</p>
        )}

        {errors.form && (
          <p className="text-red-600 text-center mb-4 font-semibold">{errors.form}</p>
        )} <br /> <br />

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
        >
          Login
        </button> <br /> <br />
     
      </form>
    </div>
    </>
  );
};

export default Login;
