import React,{useState} from 'react'
const LoginS=(props)=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    let submitdata=(ele)=>{
        // console.log("data is comming=",ele)
        ele.preventDefault();
        // console.log("data is comming=",ele.target.value)
        const newdata={id:new Date().getTime().toString(),email:email,password:password}
        
        /* if(newdata.email===props.data[0].email){
            alert("login successfull")
        }
        else{
            alert("login faild  ");
        } */
       /* const matchdata= props.data.map((ele)=>{
            if(ele.email==newdata.email&&ele.password===newdata.password){
                return true
            }
            else{
                return false
            }
                
        }) */
        let flag=2;
        for(let i=0;i<props.data.length;i++){
            if(props.data[i].email==newdata.email&&props.data[i].password===newdata.password){
                flag =1;
            }
            else{
                flag =0;
            }
        }
        console.log("check true false"+" --> ",flag)
        if(flag==1){
            alert("login successfull")
        }
        else if(flag==0){
            alert("login faild  ");
        }
        console.log("console email check"+newdata.email);
        console.log("console diff comp email check"+props.data);
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