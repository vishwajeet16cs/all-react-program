import React, { Component } from 'react'
import Axios from "axios";
import "../style/style.css";
class Userlist extends Component {
   constructor(props){
       super(props)
       this.state={
           user:[],
       }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((respons)=>{
            this.setState({
                user:respons.data
            })
        }).catch(()=>{})
    }
    render() {
        return (
            <>
                {/* {JSON.stringify(this.state.user)} */}
                <div className="container">
    <div className="row">
        <div className="col">
            <div className="card">
                <div className="card-header"> 
                <table className="table table-hover">
                    <thead className="thead">
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>city</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           this.state.user!==0 ?<>{this.state.user.map((ele)=>{
                            return (<tr key={ele.id}>
                                <th>{ele.id}</th>
                                <th>{ele.name}</th>
                              <th>{ele.email}</th>
                               <th>{ele.address.city}</th>
                            </tr>)
                       })   }</>:null
                          
                        }
                    </tbody>
                </table>
                </div>
                    <div className="card-body"></div>
               
            </div>
        </div>
    </div>
</div>
            </>
        )
    }
}

export default Userlist
