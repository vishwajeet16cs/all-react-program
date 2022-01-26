import React, { Component } from 'react'

import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
// import ComponentOnChoice from './component/ComponentOnChoice'
import OneComp from './component/One'
import {ComponentOnChoice} from './component/ComponentOnChoice'
export class App extends Component {
  state={
    selectedData:{}
  }
   selectedHandler=(element)=>{
      console.log("selected data App",element )
      this.setState({selectedData:element})
   } 
  render() {
    return (
      <>
      <h6>{JSON.stringify(this.state.selectedData)}</h6>
      {/* <h1>hello check</h1> */}
      {/* <Comp1/> */}
      {/* <ComponentOnChoice  /> */}
      <Router>
           {/* <OneComp/> */}
        <Routes>
           <Route exact path="/" element={<OneComp selectedHandler={this.selectedHandler}/>}/>
           <Route exact path="/cerulean" element={<ComponentOnChoice selectedData={this.state.selectedData}/>}/>
           {/* <Route exact path="/cerulean" element={<Comp1/>}/>
           <Route exact path="/fuchsia%20rose" element={<Comp2/>}/>
           <Route exact path="/true%20red" element={<Comp3/>}/>
           <Route exact path="/aqua%20sky" element={<Comp4/>}/>
           <Route exact path="/tigerlily" element={<Comp5/>}/>
           <Route exact path="/blue%20turquoise" element={<Comp6/>}/> */}
        </Routes>
      </Router>
        
      </>
    )
  }
}

export default App


