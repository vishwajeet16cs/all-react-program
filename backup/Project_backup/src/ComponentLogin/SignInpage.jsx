import axios from 'axios';
import React,{useState,useEffect} from 'react'
import './Sighin.css';

const SignInpage = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [reEnterPassword,setreEnterPassword]=useState("");
    const [Message,setMessage]=useState("");
    const save=()=>{
        console.log("save method is working")
        var newEmp={
            "name":name,
            "email":email,
            "password":password,
            "reEnterPassword":reEnterPassword,
        }
        
         for(var i=0;i<=oldData.length;i++)
         {    
           
              if(oldData[i].email!==newEmp.email)
              {
                if(newEmp.password!==newEmp.reEnterPassword)
                {
                  alert("password miss match")
              // console.log(Message)
                }
                else{
                  axios.post("http://localhost:3002/product",newEmp)
              .then(responce=>{
                      setMessage(email+"save Successfull!")
              })
                }
              }
              else
              {
                alert("this account already exist go to login Page");
              }
         }
        
        // return <h4>{name} Welcome to web worlds</h4>
    }
    const [oldData,setOldData]=useState([]);
    useEffect(() => {
      axios.get("http://localhost:3002/product").then((responce)=>{
        setOldData(responce.data)
      })
      console.log(oldData)
    }, [])
    return (
        <div>
          {oldData.length===0?<h3 className="runserver">Run Server First</h3>:null}
          {/* <h6>data is here{JSON.stringify(oldData)}</h6>   */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form action="" onSubmit={save}>
                            <h4 style={{color:"green"}} className="my-4">SIGN IN HERE</h4>
                            <h3>{save}</h3>
                        <div className="form-group mt-3">
                          <input type="text" 
                            name="name" 
                            placeholder="Enter Name" 
                            className="form-control inpbox "
                            style={{backgroundColor:"#cbe7cb"}}
                            onChange={obj=>setName(obj.target.value)}/>
                        </div>
                        <div className="form-group">
                          <input type="email" name="email"
                            placeholder="Enter Email"
                            className="form-control"
                            style={{backgroundColor:"#cbe7cb"}}
                            onChange={obj=>{setEmail(obj.target.value)}}  />
                        </div>
                        <div className="form-group">
                        <label htmlFor="">Enter Password</label>
                          <input type="password" name="password"
                            // placeholder="Enter password"
                            className="form-control inpbox"
                            style={{backgroundColor:"#cbe7cb"}}
                            onChange={obj=>{setPassword(obj.target.value)}}  />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">ReEnter Password</label>
                          <input type="password" name="reEnterPassword"
                            // placeholder="Re-Enter password"
                            className="form-control"
                            style={{backgroundColor:"#cbe7cb"}}
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
export default SignInpage