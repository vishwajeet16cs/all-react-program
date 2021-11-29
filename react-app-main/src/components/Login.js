import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import { login } from '../features/userSlice';
import './login.css'
const Login=()=>{
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [storeEnter,setstoreEnter]=useState([]);
    const dispatch=useDispatch();
    const handlerSubmit=(e)=>{
        e.preventDefault();
         dispatch(login({
             name:name,
             email:email,
             password:password,
             loggedIn:true,
         }))
         const newdata={id:new Date().getTime().toString(),name:name,email:email,password:password}
         setstoreEnter([...storeEnter,newdata]);//will all enter data

    }
    return(
        <>
        <div className="login my-3">
        <form className="login__form" onSubmit={(e)=>handlerSubmit(e)}>
             <h1 style={{color:"#fff",animation: "glow 1s ease-in-out infinite alternate", }}>Login Form</h1>
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
            
            <button type="submit" className="btn btn-danger my-3">login</button>
            </div>
        </form>
        </div>
        </>
    )
}
export default Login;