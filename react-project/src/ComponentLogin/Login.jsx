import axios from 'axios';
import React,{useEffect, useState} from 'react'

export const Login = () => {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [Message,setMessage]=useState("");
    const [flag,setFlag]= useState(2);
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
                setFlag(1);
                console.log("its true")
                break;
            }else{
              setFlag(0)
              console.log("tis false")
            }
            // console.log("loop is break")
            
        }
        // console.log("falg is changing"+flag)
        if(flag==1){
          alert("login successfull")
        }else{
          alert("invalid user id and password")
        }
        // if(flag==0){
        //   console.log("log in success full");
        // }
        // else{
        //   alert("login un successfull");  
        // }
        
    }
    /* const flagcheck=()=>{
      setFlag(10)
    } */
    return (
        <div>
          {/* <button onClick={flagcheck}></button> */}
          <h6>{JSON.stringify(flag)}</h6>
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
