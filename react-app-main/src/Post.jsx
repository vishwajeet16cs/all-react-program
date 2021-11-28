import React, { Component } from 'react'
import axios from 'axios';
class Post extends Component {
    state={
        userId:"",
        id:"",
        title:"",
        body:""
     }
           handleChange=(event)=>{
              this.setState({...this.state,[event.target.name]:event.target.value})
           }
           subHandler=(event)=>{
               event.preventDefault()
               axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
                   .then((response) => {
                  /*  this.setState({
                     data: (response.data)
                      }); */
                  /*  console.log(this.componentDidMount) */
                   console.log(response)
                 })
           
                 .catch((error) => {
                   console.log("error", error);
                 });
           }
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-header">
                                <pre>{JSON.stringify(this.state)}</pre>
                            </div>
                            <div className="card-body">
                                 <form onSubmit={this.subHandler}>
                                    <div className="form-group">
                                    <input type="text" className="form-control"
                                    onChange={this.handleChange} 
                                    name="userId"/>
                                    </div>
                                    <div className="form-group">
                                    <input type="text" className="form-control" 
                                     onChange={this.handleChange}
                                     name="id"/>
                                    </div>
                                    <div className="form-group">
                                    <input type="text" className="form-control"
                                     onChange={this.handleChange}
                                     name="title"/>
                                    </div>
                                    <div className="form-group">
                                    <input type="text" className="form-control"
                                     onChange={this.handleChange}
                                     name="body"/>
                                    </div>
                                    <div className="form-group">
                                    <input type="submit" className="form-control btn btn-danger"/>
                                    </div>
                                </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
                
            </>
        )
    }
}

export default Post