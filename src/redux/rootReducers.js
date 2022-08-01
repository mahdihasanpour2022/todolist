import todosReducer from "./todos/todosReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  todosSatte: todosReducer,
});
export default rootReducers;
