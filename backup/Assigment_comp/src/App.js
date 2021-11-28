import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import About from "./Component/About";
import Home from "./Component/Home";
import CompoInfo from "./Component/Compinfo/CompInfo";
import Form1 from "./Component/Loginform";
const App=()=>{
  return(<>
  

  <Router>
    <Navbar/>
    <Switch>
      <Route path="/home" component={Form1}/>
      <Route path="/about" component={CompoInfo}/>
      <Router path="/contact" component={About}/>
    </Switch>
  </Router>
  
  </>)
}
export default App;