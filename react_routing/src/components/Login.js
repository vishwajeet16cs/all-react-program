import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import { login } from '../features/userSlice';
import './login.css'
import LoginS from './LoginS';
const Login=()=>{
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [phone,setPhone]= useState("");
    const [storeEnter,setstoreEnter]=useState([]);
    const dispatch=useDispatch();
    const handlerSubmit=(e)=>{
        e.preventDefault();
         dispatch(login({
             name:name,
             email:email,
             password:password,
             phone:0,
             loggedIn:true,
         }))
         const newdata={id:new Date().getTime().toString(),name:name,email:email,password:password}
         setstoreEnter([...storeEnter,newdata]);//will all enter data
         console.log("storage array");
         console.log(storeEnter);
         

    }
   
    return(
        
        <>
        <div className="login my-3">
            
        <form className="login__form" onSubmit={(e)=>handlerSubmit(e)}>
        {/* <h3>Create your Account</h3> */}
             <h1 style={{color:"black"}}>Create Account </h1>
                <div className="form-group">
            <div>
                <input type="text" 
                    name="name"
                    placeholder="Enter Name"
                    className="my-3"
                    value={name}
                    onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
                <input type="email" 
                    name="email"
                    placeholder="Enter Email"
                    className="my-3"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
                <input type="password" 
                    name="password"
                    // placeholder="Enter Password"
                    className="my-3"
                    value={password }
                    onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div>
                <input type="number" 
                    name="name"
                    placeholder="Phone No"
                    className="my-3"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)} />
            </div>
            
            <button type="submit" className="btn btn-danger my-3">sign in</button>
            </div>
        </form>
            <br/>
            <LoginS data={storeEnter}/>
        </div>
        
        </>
    )
}
export default Login;