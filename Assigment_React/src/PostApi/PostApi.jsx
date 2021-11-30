    import axios from 'axios';
    import React,{useEffect, useState} from 'react';
    const PostApi=()=>{
        const [data,setData]=useState([]);
        useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/users").then((responce)=>{
                setData(responce.data)
            })
        })
        const clickHandler=(ele)=>{
                return <>
                <h6>{ele}</h6>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-header"></div>
                                    <div className="card-body">
                                        <h5>name:{ele.name}</h5>
                                        <h1>dhdjsjs hsh hdhe jsbsbh</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </>
        }
        
        return(
            
        <>
        {/* <h6>{JSON.stringify(data)}</h6> */}
            {/* <h1>hello check</h1> */}
           {/*  <div className="container">
                    <div className="row">
                        <div className="col">
                            
                        </div>
                    </div>
            </div>
            {clickHandler} */}
            
            <table  className="table table-striped table-dark">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {data.map((ele)=>{
                                        const {id,name,email,address}=ele;
                                        return <tr key={id} onMouseOver={clickHandler.bind(this, ele)}>
                                               <td>{id}</td>
                                            <td>{name}</td>
                                            <td>{email}</td>
                                            <td>{address.city}</td>
                                    </tr>
                                    })}
                                </tbody>
                            </table>
        </>)
    }
    export default PostApi;

  /*   {data.map((ele)=>{
        const {id,name,email,address}=ele;
        return <tr key={id} onMouseOver={clickHandler.bind(this, ele)}>
               <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address.city}</td>
    </tr>
    })} */

   /*  <table  className="table table-striped table-dark">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {data.map((ele)=>{
                                        const {id,name,email,address}=ele;
                                        return <tr key={id} onMouseOver={clickHandler.bind(this, ele)}>
                                               <td>{id}</td>
                                            <td>{name}</td>
                                            <td>{email}</td>
                                            <td>{address.city}</td>
                                    </tr>
                                    })}
                                </tbody>
                            </table> */