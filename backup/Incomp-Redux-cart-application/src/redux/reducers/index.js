// Root reducer
import { combineReducers} from "redux";
import { productReducer } from "./productReducer";
const index = combineReducers({
    allProducts:productReducer,
});
export default index;