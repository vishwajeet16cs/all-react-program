import React from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import {logout,selectUser} from '../features/userSlice'
import "./Logout.css"
const Logout =()=>{
    const user = useSelector(selectUser);
    const dispatch=useDispatch();// can't put dispatch in side the functonor haindler
    //it is a local variablr
    const handleLogout=(e)=>{
        e.preventDefault();
        dispatch(logout())
    }

    return(
        <>
        <div className="logout">
            <h1>Welcome <span calssName="user__name" style={{color:"white"}}>{user.name}</span></h1>
            <button className="logout__button" onClick={(e)=>handleLogout(e) }>Logout</button>        
        </div>
        
        </>
    )
}
export default Logout;