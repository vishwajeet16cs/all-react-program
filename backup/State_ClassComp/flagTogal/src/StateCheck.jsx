    import React from "react";
    class StateCheck extends React.Component{
        state={
            msg:"hello people",
            flag:0
        }
        change=
        ()=>{
            console.log(this.state.msg);
            if(this.state.flag==0){
                this.setState({...this.state,msg:"good after noon",flag:1})
                console.log(this.state.flag);
            }
            else{
                console.log(this.state.flag);
                this.setState({...this.state,msg:"hello people",flag:0})
            }
            
            // this.state.msg="fhsdkjjkdsbdbhjebd";
            console.log(this.state.msg);
        }
        data=<><h6>{JSON.stringify(this.state)}</h6>        <h1>{this.state.msg}</h1>
        <button onClick={this.change}>click here</button></>
        render(){
            return(<>
            {console.log("first execut")}
            {this.data}
            
            
            </>)
        }
    }
    export default StateCheck;