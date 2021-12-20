import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './One.css'
export class OneComp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      
    }
  }
  async componentDidMount() {
     let url = "https://reqres.in/api/unknown";
    let data = await fetch(url);
    let parseData = await data.json()
    // console.log(parseData);
    this.setState({data:parseData.data })
  }
  render() {
    console.log("data is here",this.state.data)
    return (
      <div className='container mt-5 my-10'>
        <h6>{JSON.stringify(this.state.data[1])}</h6>  
        {/* <h1>hello check</h1>       */}
        <div className='row'>    
          {this.state.data.map((element) =>(
           
                    <Link to={element.name}>
                        <div className="col-md-3"  style={{ backgroundColor:element.color,margin:"20px", padding:"10px"}} key={element.id} >
                           <h1 className='hone' style={{textAlign :"center",fontSize:"22px" ,textTransform:"capitalize" ,padding:"22px"}}>{element.name}</h1>
                           <h2 className='htwo' style={{textAlign :"center",fontSize:"20px",padding:"25px"}}>{element.year}</h2>
                         </div> 
                    </Link>           
          )
          )}         
        </div>
      </div>
    )
  }
}

export default OneComp