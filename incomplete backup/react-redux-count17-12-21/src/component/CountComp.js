// import { Button } from '@mui/material'

// // import {incrAction,decrAction} from "../redux/Count/Action"
// import { useDispatch,useSelector } from 'react-redux'
// const CountComp = () => {
//     // const [count,setCount] = useState(0)
//     // let dispatch = useDispatch();
//     let storeCounter=useSelector((state)=>{
//         return state.counter
//     })
//     // let incrHandler=()=>{
//     //     dispatch(incrAction());
//     // };
//     // let decrHandler=()=>{
//     //     dispatch(decrAction());
//     // }
//     return (
//         <div>
//             <h1>hello from counter check</h1>
//             {/* <h1>{storeCounter}</h1> */}
//             {/* <Button color="primary" onClick={incrHandler}>incr</Button>
//             <Button color="primary" onClick={decrHandler}>decr</Button> */}
//         </div>
//     )
// }

// export default CountComp
//------------------------------------------------
import { incrAction, decrAction } from "../redux/Count/Action";

import { useDispatch, useSelector } from "react-redux";
let Counter = () => {
  let dispatch = useDispatch();
  let storeCounter = useSelector((state) => {
    return state.counter;
  });
  let incrHandler = () => {
    //dispatch action
    dispatch(incrAction());
  };
  let decrHanlder = () => {
    //dispatch action
    dispatch(decrAction());
  };
  return (
    <>
      <h1>Counter Example</h1>

      <h2>Counter Value: {storeCounter.counter}</h2>
      <pre>{JSON.stringify(storeCounter)}</pre>
      <button onClick={incrHandler}>Incr</button>
      <button onClick={decrHanlder}>Decr</button>
    </>
  );
};
export default Counter;