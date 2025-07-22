import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
function App() {
  return (
    <>
   <BrowserRouter>
    <nav>
      <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-around', gap: 20, padding: '10px'}} >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
      </ul>
    </nav> 

      <Routes>      
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />   
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
