import React,{Component} from 'react';
import axios from 'axios';
class PostForm extends Component{
    constructor(props){
        super(props)
        this.state={
            userId:'',
            title:'',
            body:'' 
        }
    }
    componentDidMount(){
        axios.post("https://jsonplaceholder.typicode.com/posts ",this.state)
        .then((response)=>{
           console.log(response)
        })
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();// if for prevent data from los after clicking submit button
        console.log(this.state);
    }

    render(){
        const {userId,title,body}=this.state;

        return(
            <div>
                    <form action="" onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text"
                                name="userId"
                                value={userId}
                                placeholder="User Id"
                                onChange={this.handleChange} />
                        </div>
                        <div>
                            <input type="text"
                                name="title"
                                value={title}
                                placeholder="Title"
                                onChange={this.handleChange} />
                        </div>
                        <div>
                            <input type="text"
                                name="body"
                                value={body}
                                placeholder="Body"
                                onChange={this.handleChange} />
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
            </div>
        )
    }
}
export default PostForm;