/* eslint-disable react-refresh/only-export-components */
import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const userListContext = createContext();

const UserListProvider = ({ children }) => {
  const getUserList = JSON.parse(localStorage.getItem("UserList")) || null;
  const [userList, setUserList] = useState(getUserList);

  useEffect(() => {
    if (userList?.length)
      localStorage.setItem("UserList", JSON.stringify(userList));
  }, [userList]);

  return (
    <userListContext.Provider value={{ userList, setUserList }}>
      {children}
    </userListContext.Provider>
  );
};

export default UserListProvider;
export const useUserList = () => useContext(userListContext);
