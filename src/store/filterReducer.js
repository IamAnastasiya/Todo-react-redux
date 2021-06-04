import {SET_FILTER} from "../constants/ActionTypes";
const filter = "all";

export default function todosReducer (state = filter, action) {
            switch (action.type) {
                case SET_FILTER:
                    return state = action.filterOption
                default:
                    return state;
            }
}