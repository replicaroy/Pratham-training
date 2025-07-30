import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children})=> {
    const [user,setUser] = useState({
        name: 'Rahul',
        email: 'rahul@gmail.com',
        age: 20,
        gender : 'male'
    })
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
  
export const useUser = () => useContext(UserContext);
export default UserProvider;