// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar'
// import GitIssue from './GitIssue.jsx';
import AppRoutes from './routes';


function App() {
  return (
    <>

        <>
          <Navbar />
          <BrowserRouter>
    
          <AppRoutes/>
      
          
          </BrowserRouter>
          {/* <GitIssue /> */}
        </>
    

    </>
  );
}

export default App;
