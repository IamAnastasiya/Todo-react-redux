import {ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    UPDATE_TODO,
    DELETE_COMPLETED,
    SET_FILTER,
    TOGGLE_ALL_TODOS} from "../constants/ActionTypes";

export function addTodo (text) {
    return {
        type: ADD_TODO,
        id: Math.random(),
        text: text
    }
}

export function deleteTodo (id) {
    return {type: DELETE_TODO, id: id}
}

export function toggleTodo (id) {
    return {type: TOGGLE_TODO, id: id}
}

export function updateTodo (id, text) {
    return {
        type: UPDATE_TODO,
        id: id,
        text: text
    }
}

export function setFilter (filter) {
    return {type: SET_FILTER, filter: filter}
}

export function toggleAll (allToggled) {
    return {type: TOGGLE_ALL_TODOS, allToggled: allToggled}
}

export function deleteCompleted () {
    return {type: DELETE_COMPLETED}
}



