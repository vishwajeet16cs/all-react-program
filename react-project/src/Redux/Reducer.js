import { INCR,DECR } from "./Action";
let initialState ={
    counter:0,
}
let counterReducer = (state =initialState,action) =>{
    switch(action.type){
        case INCR:
            return {
                counter:state.counter +1
            }
        case DECR:
            return {
                counter:state.counter -1
            }
        default:
            return state;
    }
};
export {counterReducer}