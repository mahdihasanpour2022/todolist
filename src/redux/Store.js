import {applyMiddleware, createStore} from "redux";
import rootReducers from "./rootReducers";
import thunk from "redux-thunk";

const Store = createStore(rootReducers ,applyMiddleware(thunk));
export default Store;
