
import {Link, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './Component/Navbar';
const App=()=>{
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-right px-5">
            <Link to='/add' className='btn btn-outline-dark'>Add Contact</Link>
          </div>
          <div className="col-md-6 mx-auto">
            <h1>Welcome to React world</h1>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;

{/* /add /edit/:1d */}
{/* <ToastContainer/>
<Navbar/>
<Routes>
  <Route exact path="/" element={<h1>I Am Home page </h1>}/>
  <Route exact path="/add" element={<h1>i am add component</h1>}/>
  <Route exact path="/edit/:id" element={<h1>i am edit component</h1>}/>
</Routes> */}