/* import './App.css'
import './index.css'
const App = () =>
 {
  return ( 
  <>
      <h1>hello app check</h1>
  </>
    );
    
}

export default App;
 */

import React from "react";
import Navbar from "./Navbar/Navbar";
import Registration from "./components/Regi/Registration";
import Login from "./components/Login/Login";
import Employee from "./components/Employee/Employee";
import Home from "./components/Home";
// import "./assets/css/super.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>hello check</h1>
        <Router>
          <Navbar />
          <hr />
          <Switch>
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/data" component={Employee} />
            <Route path="/home" component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;