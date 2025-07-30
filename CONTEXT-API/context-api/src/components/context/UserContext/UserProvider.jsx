import { createContext, useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  // });  
  const [user, setUser] = useState(()=> {
    const savedUser = localStorage.getItem('userData');
    return savedUser ? JSON.parse(savedUser) : {name: "", email: ""}
  })

  useEffect(()=> {
    if(user?.name?.length)
    localStorage.setItem('userData', JSON.stringify(user))
  }, [user])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
export const useUser = () => useContext(UserContext);
