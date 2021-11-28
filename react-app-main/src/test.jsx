import React from 'react';
import axios from 'axios'




class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
        };
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/photos").then((Response) => {
            this.setState({
                data: (Response.data)
            });

        
    })
    .catch((error) =>{
        console.log("error", error);

        console.log()
    });}
    
    render (){
        return(<>
       <pre>{JSON.stringify(this.state.data)}</pre>
        
        </>)
    }
}
export default Test