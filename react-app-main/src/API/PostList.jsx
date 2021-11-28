import React,{Component} from 'react';
import axios from 'axios';
class PostLoist extends Component{
    constructor(props){
        super(props)
        this.state={
            posts:[],

        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts ")
        .then((response)=>{
            this.setState({
                posts:response.data 
               
            })
            console.log(response)
        })
    }
    render(){
            const {posts}=this.state;//-destructuring
        return(
            <>
                <h1>List of post</h1>
                {
                    posts.map((post)=>{
                        return(
                            <div key={post.id}>{post.title}</div>
                        )
                    })
                }
            
            </>
        )
    }
}
export default PostLoist;