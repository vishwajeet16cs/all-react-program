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
import PostApi from "./PostApi/PostApi";
function App() {
  const user =useSelector(selectUser);

  return (
    <div className="app">
      {/* <CompInfo/> */}
     {/* <Login/> */}
     <Router>
       <Navbar/>
       <Switch>
        
         <Route path="/compinfo" component={CompInfo}/>
         <Route path="/login" component={Login}/>
         <Route path="/post" component={PostApi}/>
       </Switch>
     </Router>
     {/* {user?<Logout/>:<Login/>} */}
    </div>
  );
}

export default App;
