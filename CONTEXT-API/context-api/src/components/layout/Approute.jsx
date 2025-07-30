import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Protected from "./Protected";
import NotFound from "../pages/NotFound";

const Approute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/secure" element={<Protected />}>        
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="post" element={<Post />} />
        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approute;
