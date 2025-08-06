import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="p-4 mt-4 flex gap-4 justify-end bg-gray-100">
        <button
          onClick={() => navigate("/Login")}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition cursor-pointer"
        >
          Log In
        </button>
        <button
          onClick={() => navigate("/SignUp")}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition cursor-pointer"
        >
          Sign Up
        </button>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to HomePage
        </h1>
        <div className="flex space-x-4"></div>
      </div>
    </>
  );
};

export default Home;
