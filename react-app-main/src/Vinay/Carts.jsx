import React from 'react';
import './Cart.css';
import axios from 'axios';

class Carts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            
          };
         }

         componentDidMount() {
            axios.get("https://jsonplaceholder.typicode.com/posts")
              .then((response) => {
                this.setState({
                  data: (response.data.data)
                  
        
                });
                
              })
        
              .catch((error) => {
                console.log("error", error);
              });
              console.log(this.state.data)
          }
            datacard=[
              {name:"Modern, Well-Appointed Room",sty:"⭐⭐⭐⭐⭐",adr:"36b Talbot green, Liantrisant,Wales,CF72 8AF",image:"https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg"},
              {name:"Modern, Well-Appointed Room",sty:"⭐⭐⭐⭐⭐",adr:"36b Talbot green, Liantrisant,Wales,CF72 8AF",image:"https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg"},
              {name:"Modern, Well-Appointed Room",sty:"⭐⭐⭐⭐⭐",adr:"36b Talbot green, Liantrisant,Wales,CF72 8AF",image:"https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg"},
              {name:"Modern, Well-Appointed Room",sty:"⭐⭐⭐⭐⭐",adr:"36b Talbot green, Liantrisant,Wales,CF72 8AF",image:"https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg"},
              {name:"Modern, Well-Appointed Room",sty:"⭐⭐⭐⭐⭐",adr:"36b Talbot green, Liantrisant,Wales,CF72 8AF",image:"https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg"},
              {name:"Modern, Well-Appointed Room",sty:"⭐⭐⭐⭐⭐",adr:"36b Talbot green, Liantrisant,Wales,CF72 8AF",image:"https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg"},
              {name:"Modern, Well-Appointed Room",sty:"⭐⭐⭐⭐⭐",adr:"36b Talbot green, Liantrisant,Wales,CF72 8AF",image:"https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg"},
            ]

    render(){
    return (
        <div style={{display:'flex'}} className="div__the">
          {this.datacard.map((ele)=>{
            let {name,sty,adr,image}=ele;
            return(
              <div  className="main__div">
               <div className="container" >'
               <div className="row">
               <div style={{width:'23rem', height:'25rem'}} class="card  mr-4 ">
      <div className="card-heder">
        <img src={image} width="100%" height="200px" />
      </div>
      <div className="card-body car__body">
        <h4>{name}</h4>
        <h6>{sty}</h6>
        <h5>{adr}</h5>
      </div>
    </div>
                 </div></div>
              </div>
            )
          })}
          
          <div className="container mt-100">

<div className="row">
  <div className="col-md012 col">


    
    {/* ////------Second project */}
    <div style={{width:'2300rem', height:'25rem'}} class="card  mr-4 ">
      <div className="card-heder">
        <img src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" width="100%" height="200px" />
      </div>
      <div className="card-body car__body">
        <h4>Modern, Well-Appointed Room</h4>
        <h6>⭐⭐⭐⭐⭐</h6>
        <h5>36b Talbot green, Liantrisant,Wales,CF72 8AF</h5>
      </div>
    </div>
    {/* /*   third product */ }
    <div style={{width:'2300rem', height:'25rem'}} class="card  mr-4 ">
      <div className="card-heder">
        <img src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" width="100%" height="200px" />
      </div>
      <div className="card-body car__body">
        <h4>Modern, Well-Appointed Room</h4>
        <h6>⭐⭐⭐⭐⭐</h6>
        <h5>36b Talbot green, Liantrisant,Wales,CF72 8AF</h5>
      </div>
    </div>
    <div style={{width:'2300rem', height:'25rem'}} class="card  mr-4 ">
      <div className="card-heder">
        <img src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" width="100%" height="200px" />
      </div>
      <div className="card-body car__body">
        <h4>Modern, Well-Appointed Room</h4>
        <h6>⭐⭐⭐⭐⭐</h6>
        <h5>36b Talbot green, Liantrisant,Wales,CF72 8AF</h5>
      </div>
    </div>
    <div style={{width:'2300rem', height:'25rem'}} class="card  mr-4 ">
      <div className="card-heder">
        <img src="https://ibooking.co.uk/custom_assets/image/ibooking-hero-image.jpg" width="100%" height="200px" />
      </div>
      <div className="card-body car__body">
        <h4>Modern, Well-Appointed Room</h4>
        <h6>⭐⭐⭐⭐⭐</h6>
        <h5>36b Talbot green, Liantrisant,Wales,CF72 8AF</h5>
      </div>
    </div>
    
      
  
  </div>
  </div>
 

</div>
        </div>
    )
}
}

export default Carts
