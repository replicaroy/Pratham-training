import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../CONTEXT/LoginUserProvider";

const Navbar = () => {
  const { setUserLogin } = useLogin();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserLogin(null);
    navigate("/login");
  };

  return (
    <div className=" bg-blue-400 p-4 flex justify-between  ">
      <div>
        <ul className="flex gap-5 list-none text-[20px]"  >
          <li className="5 list-none  text-[20px] bg-blue-200 text-black px-4 py-1 rounded-md cursor-pointer">
            <Link to={"/post"}>Post data</Link>
          </li  >
          <li className=" list-none text-[20px] bg-blue-200 px-4 text-black py-1 rounded-md cursor-pointer">
            <Link to={"/createpost"}>create Post</Link>
          </li>
        </ul>
      </div>
      <div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
