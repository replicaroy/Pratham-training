import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext/UserProvider";


const Protected = ()=> {
    const {user} = useUser();

    return (
        <div>
            <div> {user?.name?.length? <Outlet/> : <Navigate to='/' replace/>} </div>
        </div>
    )

}
export default Protected;