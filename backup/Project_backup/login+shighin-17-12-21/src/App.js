import SignInpage from "./ComponentLogin/SignInpage";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Login } from "./ComponentLogin/Login";


function App() {
  return (
    <>
     
     {/* <Login/> */}
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/sighin" element={<SignInpage />} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
