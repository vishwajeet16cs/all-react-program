import React from 'react';
import './style.css'
const CompInfo =()=>{
    
    console.log("hello check");
    return(
        <>
            <div className="container my-5">
                <div className="col">
                    <div className="row">
                        <div className="card">
                            <div className="card-header my-2 ">
                                {/* <img src={"image/Geeksynergy.jped"} alt="Geeksynergy" /> */}
                                <h3>Company Info</h3>
                            </div>
                            <div className="card-body">
                            <h1>Company:<span style={{color:"lightblue"}}>Geeksynergy Technologies Pvt Ltd</span></h1>
                            <h1>Address:<span style={{color:"lightblue"}}> Sanjayanagar, Bengaluru-56</span></h1>
                            <h1>Phone:<span style={{color:"lightblue"}}>XXXXXXXXX09</span></h1>
                            <h1>Email:<span style={{color:"lightblue"}}>XXXx@gmail.com</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}
export default CompInfo;