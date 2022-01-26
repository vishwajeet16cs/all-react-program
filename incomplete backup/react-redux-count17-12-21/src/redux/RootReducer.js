// import { counterReducer } from "./Count/Reducer";
// // import {combinedReducers} from 'redux'
// import { combineReducers } from "redux";
// let rootReducer=combineReducers({counter:counterReducer});
// export {rootReducer};
//-----------------------------------------------------------

import { combineReducers } from "redux";
// import { messageReducer } from "./message/message.reducer";
import { counterReducer } from "./Count/Reducer";
let rootReducer = combineReducers({counter: counterReducer,
});
export { rootReducer };