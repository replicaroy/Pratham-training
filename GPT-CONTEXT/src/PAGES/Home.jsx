import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to HomePage</h1>
      <div className="flex space-x-4">
        <button
          onClick={() => navigate('/Login')}
          className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        >
          Log In
        </button>
        <button
          onClick={() => navigate('/SignUp')}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </div>
    </div>
  )
}

export default Home
