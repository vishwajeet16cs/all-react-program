import './App.css';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import NotFound from './Components/Pages/NotFound';

const App = () => {
  return (
    <div className="App">
      {/* <h1>Hello App</h1> */}
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
