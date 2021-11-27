// import React from 'react';
// import Home from './components/Home';
// import Navbar from './Navbar/Navbar';
// // import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
// const App=()=>{
  
	  
//     return(
//     <React.Fragment>
//       <Home/>
//         <Router>
//           <Navbar />
//           <hr />
//          <Switch>
//             <Route path="/home" component={Home} />
//             {/* <Route path="/login" component={Login} />
//             <Route path="/data" component={Employee} /> */}
//           </Switch>
//         </Router>
//       </React.Fragment>
//     );
  
// }

// export default App;
import React from "react";
// import Home from "./components/Home";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StateCheck from "./StateCheck";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>hello check</h1>
        <StateCheck/>
        {/* <Router>
          <Navbar />
          <hr />
          <Switch>
            <Route path="/registration" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/data" component={Employee} />
          </Switch>
        </Router> */}
      </React.Fragment>
    );
  }
}
export default App;