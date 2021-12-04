import EmployeeList from "./component/EmpList";
import NewEmp from "./component/NewEmp";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import SignInpage from "./ComponentLogin/SignInpage";
import { Login } from "./ComponentLogin/Login";
import { Home } from "./ComponentLogin/HomeComp/Home";



function App() {
  return (
    <>
    {/* <Navbar/> */}
     {/* <EmployeeList/>
    <NewEmp/>  */}
    {/* <h1>hello check</h1> */}
    
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route   path="signin" element={<SignInpage/> }/>
          {/* <Route   path="Login" element={<Login/> }/> */}
          <Route   path="home" element={<Home/> }/>
        </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
