import React from 'react';
import Header from './containers/Header'
import ProductComponent from './containers/ProductComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
class App extends React.Component{
  render(){
	  
    return(
    <>
        {/* <h1>hello people </h1> */}
        <div className="App">
          <Router>
            <Header/>
            <Switch>
          <Route path="/" extact component={ProductListing }/>
          {/* <Route path="/product/:productId" extact component={ProductDetail }/> */}
          </Switch>
          </Router>
        </div>
    </>);
  }
}

export default App;
