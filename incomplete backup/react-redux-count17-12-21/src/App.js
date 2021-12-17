import CountComp from "./component/CountComp";

import {Provider} from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <>
    <Provider store={store}>
      <h1>hello check</h1>
      {/* <CountComp/> */}
    </Provider>
    {/* <h1>hello check</h1> */}
      {/* <Count/> */}
    </>
  );
}

export default App;
