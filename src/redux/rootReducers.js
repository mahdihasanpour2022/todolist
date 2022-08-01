import todosReducer from "./todos/todosReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    todosState: todosReducer,
});
export default rootReducers;
