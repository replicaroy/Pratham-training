import "./App.css";
import Dashboard from "./components/login-signUp/Dashboard";
import { Home, } from "./components/login-signUp/Home";
import { Login } from "./components/login-signUp/Login";
import { SignUp } from "./components/login-signUp/SignUp";
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
function App() {
  return (
    <>
   <BrowserRouter>
    {/* <nav>
      <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'center', gap: 20, padding: '10px'}} >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/dashboard">DashBoard</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
      </ul>
    </nav>  */}

      <Routes>      
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />     
          <Route path="/dashboard" element={<Dashboard />} />     
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
