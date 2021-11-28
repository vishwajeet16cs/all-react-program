import React from "react";
import Login from "./components/Login";
import './App.css';
import {useSelector} from "react-redux";
import Logout from "./components/Logout";
import {selectUser}  from "./features/userSlice";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import CompInfo from "./navbar/CompInfo";
function App() {
  const user =useSelector(selectUser);

  return (
    <div className="app">
      {/* <CompInfo/> */}
     {/* <Login/> */}
     <Router>
       <Navbar/>
       <Switch>
        
         <Route path="/compinfo" componenet={CompInfo}/>
         <Route path="/login" componenet={Login}/>
         <Route path="post" componenet={Login}/>
       </Switch>
     </Router>
     {user?<Logout/>:<Login/>}
    </div>
  );
}

export default App;
