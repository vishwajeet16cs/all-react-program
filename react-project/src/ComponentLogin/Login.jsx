import React,{useState} from 'react'

export const Login = () => {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [Message,setMessage]=useState("");
    return (
        <div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <form action="">
                      <input type="email" placeholder="Enter Email" className="form-control mt-3" onChange={obj=>setEmail(obj.target.value)}/>
                      <input type="password"  className="form-control mt-3" onChange={obj=>{setPassword(obj.target.value)}} />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
    )
}
