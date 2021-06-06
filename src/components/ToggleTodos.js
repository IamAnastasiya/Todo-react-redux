import {useSelector, useDispatch} from "react-redux";
import {toggleAll} from "../actions";

export function ToggleTodos() {
    const todos = useSelector(state => state.todosReducer);
    const dispatch = useDispatch();

    let completedCount = todos.reduce((count, todo) => {
        if (todo.completed) count++;
        return count;
    }, 0);

    const isCompletedAll = todos.length === completedCount;
    let allToggled = todos.every((todo) => todo.completed);

    return (<>
        <input
            checked={isCompletedAll}
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={() => dispatch(toggleAll(!isCompletedAll))}
        />
        <label
            htmlFor="toggle-all"
            onClick={()=>dispatch(toggleAll(allToggled))}>
            Mark all as complete
        </label>
    </>)
}
