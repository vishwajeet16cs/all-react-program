import React from 'react';
import Home from './Component/Home';
import Cart from './Component/Cart';
import {CartProvider } from 'react-use-cart';
class App extends React.Component{
  render(){
	  
    return(
    <>
    <CartProvider> 
      <Home/>
      <Cart/> 
     </CartProvider>
    </>);
  }
}

export default App;
