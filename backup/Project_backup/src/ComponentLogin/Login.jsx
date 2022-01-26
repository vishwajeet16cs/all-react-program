import React from 'react'

export const Login = () => {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [Message,setMessage]=useState("");
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form action="" onSubmit={save}>
                            <h4 style={{color:"green"}} className="my-4">SIGN IN HERE</h4>
                            {/* <h3>{save}</h3> */}
                        <div className="form-group mt-3">
                          <input type="text" 
                            name="name" 
                            placeholder="Enter Name" 
                            className="form-control "
                            onChange={obj=>setName(obj.target.value)}/>
                        </div>
                        <div className="form-group">
                          <input type="email" name="email"
                            placeholder="Enter Email"
                            className="form-control"
                            onChange={obj=>{setEmail(obj.target.value)}}  />
                        </div>
                        <div className="form-group">
                          <input type="password" name="password"
                            // placeholder="Enter password"
                            className="form-control"
                            onChange={obj=>{setPassword(obj.target.value)}}  />
                        </div>
                        <div className="form-group">
                          <input type="password" name="reEnterPassword"
                            // placeholder="Re-Enter password"
                            className="form-control"
                            onChange={obj=>{setreEnterPassword(obj.target.value)}}  />
                        </div>
                        {/* <div className="form-group">
                          <input type="submit" className="btn btn-info"
                            onChange={obj=>{setreEnterPassword(obj.target.value)}}  />
                        </div> */}
                        {name.length!==0 && email.length!==0&& password.length!==0&&reEnterPassword.length!==0?
                        <div className="form-group">
                        <input type="submit" className="btn btn-info"
                          onChange={obj=>{setreEnterPassword(obj.target.value)}}  />
                      </div>:null}

                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
