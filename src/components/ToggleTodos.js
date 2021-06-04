import { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {TOGGLE_ALL_TODOS} from "../constants/ActionTypes";

export function ToggleTodos() {
    const todos = useSelector(state => state.todosReducer);
    const dispatch = useDispatch();

    let completedCount = todos.reduce((count, todo) => {
        if (todo.completed) count++;
        return count;
    }, 0);

    const isCompletedAll = todos.length === completedCount;
    const [checked, setChecked] = useState(isCompletedAll);

    useEffect(() => {
        setChecked(isCompletedAll);
    }, [isCompletedAll])

    let allToggled = todos.every((todo) => todo.completed);

    const toggleAllTodos = () => {
        dispatch({type: TOGGLE_ALL_TODOS, allToggled: allToggled})
    }

    return (<>
        <input
            checked={checked}
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={(e) => setChecked(checked)}
        />
        <label htmlFor="toggle-all" onClick={toggleAllTodos}>
            Mark all as complete
        </label>
    </>)
}
