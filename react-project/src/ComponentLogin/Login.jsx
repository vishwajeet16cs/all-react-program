import axios from 'axios';
import React,{useEffect, useState} from 'react'

export const Login = () => {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [Message,setMessage]=useState("");
    const [flag,setFlag]= useState(0);
    useEffect(()=>{
      axios.get("http://localhost:3002/product").then(responce=>{
        setMessage(responce.data)
        // console.log(responce.data);
      })
    },[])
    const submitHAndler=(event)=>{
        event.preventDefault();
        let i;
        for(i=0;i<Message.length;i++){
          console.log(Message[i]. password)
            if(Message[i].email==email && Message[i].password==password){
                setFlag(1)
            }
            
        }
        console.log(flag)
        // if(flag==0){
        //   console.log("log in success full");
        // }
        // else{
        //   alert("login un successfull");  
        // }
        
    }
    return (
        <div>
          <h6>{JSON.stringify(Message)}</h6>
          <h5>{JSON.stringify(email)}</h5>
          <h5>{JSON.stringify(password)}</h5>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <form action="" onSubmit={submitHAndler}>
                      <input type="email" placeholder="Enter Email" className="form-control mt-3" onChange={obj=>setEmail(obj.target.value)}/>
                      <input type="password"  className="form-control mt-3" onChange={obj=>{setPassword(obj.target.value)}} />
                      <input type="submit" className='btn btn-success mt-2 ' />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
    )
}
