import React from 'react';
import HookIncrDecr from './component/HookIncrDecr'
import AxiosFunction from './component/AxiosFunction';
class App extends React.Component{
  render(){
	  
    return(<>
    <AxiosFunction/>
      <h1>increament and dicr of a number stored in a variable </h1>
      <HookIncrDecr/>
      
      
        </>);
  }
}

export default App;
