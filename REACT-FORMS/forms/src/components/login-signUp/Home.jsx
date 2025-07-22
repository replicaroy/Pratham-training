import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { SignUp } from './SignUp';

export const Home = () => {
  const navigate = useNavigate();

  return (
   <>
     <button onClick={() => navigate('/signup')}>SignUp</button>
     <button >Login</button>
   </>
  )
}

