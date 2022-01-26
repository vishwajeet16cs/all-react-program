// import { INCR,DECR } from "./Action";
// let initialState={
//     counter:0,
// };
// let counterReducer = (state=initialState,action)=>{
//     console.log("check reducer");
//     switch(action.type){
//         case INCR:
//             console.log("incr check");
//             return {counter:state.counter + 1};
//         case DECR:
//             console.log("incr check");
//             return {counter:state.counter - 1};
//         default:
//             return state;
//     }
// };
// export {counterReducer}


//-----------------------------------------

import { INCR, DECR } from "./Action";

let initialState = {
  counter: 0,
};
let counterReducer = (state = initialState, action) => {
  console.log("Test 123", action.type);
  switch (action.type) {
   
    case INCR:
      console.log("Hello, come to desk")
      return { counter: state.counter + 1 };
    case DECR:
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

export { counterReducer };