import React,{useState} from 'react';
const Form1=()=>{
    const [name,setName]= useState("");
    const [email,setemail]= useState("");
    const [storeEnter,setstoreEnter]=useState([]);// here we will store the data enter by user
    const store=(event)=>{
        event.preventDefault();// for prevent data loss
        const newdata={id:new Date().getTime().toString(),name:name,email:email,}
        // creating newdata to store the enter data 
        //id:new Date().getTime().toString()--for getting new id every entry by user
        //key for each entry should be different --here time is changing so we will get new kay for every entry make by user
        setstoreEnter([...storeEnter,newdata]);//here we are putting data in setstoreEnter--check usestate 3rd 
        console.log(storeEnter);// to see the change in console level
        setName("");//for clearing input box after submit
        setemail("");// same for 2nd entry


    }

    return(<>
        <form action="" onSubmit={store}>

            <div><label htmlFor="name">name</label>
                <input type="text" 
                    name="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)} />
            </div>
            <div><label htmlFor="email">email</label>
                <input type="email" 
                    name="email"
                    value={email}
                    onChange={(e)=>setemail(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-danger">login</button>
        </form>
        <div>{ storeEnter.map((ele)=>{
              const  {id,name,email}=ele;
              //ele.id-- now can be directly written as-----> id 
              //because we define in above code--const  {id,name,email}=ele;
            //   const type is need or nay data type
            return(<div key="id">
                 {/* <h1>{id}</h1> */}
                <h1>{name}</h1>
                <h1>{email}</h1>
            </div>
               
            )


        })
            
            
            }

        </div>
    
    </>)
}
export default Form1;//export not exports--