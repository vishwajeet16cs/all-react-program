import {createStore} from 'redux';
import index from './reducers/index';
const store = createStore(index,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;