import {
    ADD_TODO,
    DELETE_COMPLETED,
    DELETE_TODO,
    TOGGLE_ALL_TODOS,
    TOGGLE_TODO,
    UPDATE_TODO
} from "../constants/ActionTypes";

const todos = [];

export default function todosReducer (state = todos, action) {

    switch (action.type) {

        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]

        case UPDATE_TODO:
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {...todo, text: action.text}
                }
                return todo
            })

        case DELETE_TODO:
            return state.filter((todo) => {
                return todo.id !== Number(action.id);
            })

        case DELETE_COMPLETED:
            return state.filter((todo) => {
                return !todo.completed;
            });

        case TOGGLE_TODO:
            return state.map(todo => {
                return todo.id === action.id ?
                    {...todo, completed: !todo.completed} : todo
            })

        case TOGGLE_ALL_TODOS:
            return state.map((todo) => ({
                ...todo,
                completed: !action.allToggled
            }))

        default:
            return state;
    }
}