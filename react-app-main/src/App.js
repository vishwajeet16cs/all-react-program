import { BrowserRouter as Router,Switch,Route, } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import About from "./Component/About";
import Home from "./Component/Home";
const App=()=>{
  return(<>
  
  {/* <h1>hello it working</h1> */}
  {/* <Home/> */}
  <Router>
    <Navbar/>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
    </Switch>
  </Router>
  
  </>)
}
export default App;