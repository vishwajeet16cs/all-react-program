
import {Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddContact from './Component/AddContact';
import EditComponent from './Component/EditComponent';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
const App=()=>{
  return (
    <div className="App">
      {/* <AddContact/>  */}            
      <Navbar/>
      <Switch>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/add" element={<AddContact/>}/>
      <Route exact path="/edit/:id" element={<EditComponent/>}/>
      </Switch>
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