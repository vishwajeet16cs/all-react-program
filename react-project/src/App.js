import React, { Component } from 'react'

import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
// import ComponentOnChoice from './component/ComponentOnChoice'
import OneComp from './component/One'
import { Comp1, Comp2, Comp3,Comp4,Comp5,Comp6} from './component/ComponentOnChoice'
export class App extends Component {
  render() {
    return (
      <>
      {/* <h1>hello check</h1> */}
      {/* <Comp1/> */}
      <Router>
           {/* <OneComp/> */}
        <Routes>
           <Route exact path="/" element={<OneComp/>}/>
           <Route exact path="/cerulean" element={<Comp1/>}/>
           <Route exact path="/fuchsia%20rose" element={<Comp2/>}/>
           <Route exact path="/true%20red" element={<Comp3/>}/>
           <Route exact path="/aqua%20sky" element={<Comp4/>}/>
           <Route exact path="/tigerlily" element={<Comp5/>}/>
           <Route exact path="/blue%20turquoise" element={<Comp6/>}/>
        </Routes>
      </Router>
        
      </>
    )
  }
}

export default App


