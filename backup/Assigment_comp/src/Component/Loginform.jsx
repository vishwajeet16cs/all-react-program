import React,{useState} from 'react';
const Form1=()=>{
    const [name,setName]= useState("");
    const [email,setemail]= useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("");
    const [storeEnter,setstoreEnter]=useState([]);// here we will store the data enter by user
    const store=(event)=>{
        event.preventDefault();// for prevent data loss
        const newdata={id:new Date().getTime().toString(),name:name,email:email,phone:phone,password:password}
        // creating newdata to store the enter data 
        //id:new Date().getTime().toString()--for getting new id every entry by user
        //key for each entry should be different --here time is changing so we will get new kay for every entry make by user
        setstoreEnter([...storeEnter,newdata]);//here we are putting data in setstoreEnter--check usestate 3rd 
        console.log(storeEnter);// to see the change in console level
        setName("");//for clearing input box after submit
        setemail("");// same for 2nd entry


    }

    return(<>
        <div className="form-group">
        <form action="" onSubmit={store}>

<div>
    {/* <label htmlFor="name">name</label> */}
    <input type="text"
    className="my-3 form-control" 
        name="name"
        value={name}
        placeholder="Enter your Name"
        onChange={(e)=>setName(e.target.value)} />
</div>
<div>
    {/* <label htmlFor="email">email</label> */}
    <input type="email" 
    className="my-3 form-control"    
        name="email"
        placeholder="ENTERT EMAIL"
        value={email}
        onChange={(e)=>setemail(e.target.value)} />
</div>
<div>
    {/* <label htmlFor="email">email</label> */}
    <input type="number" 
    className="my-3 form-control"    
        name="phone"
        placeholder="ENTER PHONE NO"
        value={phone}
        onChange={(e)=>setPhone(e.target.value)} />
</div>
<div>
    {/* <label htmlFor="email">email</label> */}
    <input type="password" 
    className="my-3 form-control"    
        name="password"
        placeholder="ENTERT PASSWORD"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} />
</div>
<button type="submit" className="my-3 btn btn-danger">login</button>
</form>
        </div>
        <div>{ storeEnter.map((ele)=>{
              const  {id,name,email,phone,password}=ele;
              //ele.id-- now can be directly written as-----> id 
              //because we define in above code--const  {id,name,email}=ele;
            //   const type is need or nay data type
            return(<div key="id">
                 {/* <h1>{id}</h1> */}
                <h1>{name}</h1>
                <h1>{email}</h1>
                <h1>{phone}</h1>
                <h1>{password}</h1>
            </div>
               
            )


        })
            
            
            }

        </div>
    
    </>)
}
export default Form1;//export not exports--