import React from "react";
import Axios from 'axios';
class Classpagination extends React.Component{
    constructor(props){
        super(props)
            this.state={
                    user=[],
            }
    }
    componentDidMount(){
            Axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((responce)=>{
                    
            })
    }
    render(){
        return(<>
        
        
        </>)
    }
}