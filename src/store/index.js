import { createStore, combineReducers } from "redux"
import todosReducer from "./todosReducer";
import filterReducer from "./filterReducer"

const reducer = combineReducers({todosReducer, filterReducer})

const store = createStore(reducer);
export default store;
