import React,{useState} from 'react';
import axios from 'axios';
const NewEmp=()=>{
    const [empname,setEmpName]=useState("");
    const [empemail,setEmpEmail]=useState("");
    const [emppassword,setEmpPassword]=useState("");
    // const [empsalary,setEmpSalary]=useState("");
    const [empmessage,setEmpMessage]=useState("");
    const save=()=>{
        // preventDefault();
        console.log("svae handler is working")
        var newemp={

            "name":empname,
            "email":empemail,
            "password":emppassword,
        }
        axios.post("http://localhost:3002/product",newemp)
        .then(response=>{
            setEmpMessage(empname + "save Successfull !")
        })
    }
    console.log("return is working ")
    return(
        <>
        <div className="container">
            <h5>{empmessage}</h5>
            <div className="row">
                <div className="col">
                    <div className="card">
                      <form action="">
                      <div className="from-group">
                           <input type="text"
                            onChange={obj=>setEmpName(obj.target.value)}
                           className="form-control" 
                           placeholder="Emp Name"/>
                       </div>
                       <div className="from-group">
                           <input type="email"
                           className="form-control my-3 " 
                           onChange={obj=>setEmpEmail(obj.target.value)}
                           placeholder="Email"/>
                       </div>
                       <div className="from-group my-3">
                           <input type="password"
                           className="form-control" 
                           onChange={obj=>setEmpPassword(obj.target.value)}
                           />
                       </div>
                       
                       <button  className=" btn btn-danger mt-4"
                                onClick={save}>Save data</button>
                      </form>
                    </div>
                </div>
            </div>
        </div>
        
        
        </>
    )
}
export default NewEmp;