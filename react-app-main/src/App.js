import React from 'react';
import ContactApp from './component/ContactApp';
import Navbar from './Navbar/Navbar'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
class App extends React.Component{
  render(){
	  
    return(<>
      <ContactApp/>
      {/* <BrowserRouter>
     <Navbar/>
      <Switch>
        <Route path="/sighin" element={<ContactApp />} />
      </Switch>
    </BrowserRouter> */}
        </>);
  }
}

export default App;
