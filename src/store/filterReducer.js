import {SET_FILTER} from "../constants/ActionTypes";
import {ALL} from "../constants/filterValues";
const filter = ALL;

export default function todosReducer (state = filter, action) {
            switch (action.type) {
                case SET_FILTER:
                    return action.filter
                default:
                    return state;
            }
}