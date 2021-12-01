import React,{useState} from 'react'
const LoginS=(props)=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    let submitdata=(ele)=>{
        // console.log("data is comming=",ele)
        ele.preventDefault();
        // console.log("data is comming=",ele.target.value)
        const newdata={id:new Date().getTime().toString(),email:email,password:password}
        console.log(newdata);
        console.log("props data",props.data)
    }
    return(
    <>
    {/* <h5>data is here={JSON.stringify(props.data)}</h5> */}
    <form action="" onSubmit={submitdata}>
        {/* <input type="email"
            placeholder="Email"
            value={password}
            onChange={}
        /> */}
        <h5>LogIn</h5>
        <input type="email" 
                    name="email"
                    placeholder="Enter Email"
                    className="my-3"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                    <br />
                    <input type="password" 
                    name="password"
                    // placeholder="Enter Password"
                    className="my-3"
                    value={password }
                    onChange={(e)=>setPassword(e.target.value)} />
                    <br />

<button type="submit" className="btn btn-info my-3">login</button>
    </form>
    <h5>data is here={JSON.stringify(props.data)}</h5>
    </>)
}
export default LoginS