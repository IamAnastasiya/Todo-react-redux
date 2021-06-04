import {useSelector, useDispatch} from "react-redux";
import {SET_FILTER, DELETE_COMPLETED} from "../constants/ActionTypes";

export function Footer() {

    const todos = useSelector(state => state.todosReducer);
    const filter = useSelector(state => state.filterReducer);
    const dispatch = useDispatch();

    let notCompletedCount = todos.reduce((count, todo) => {
        if (!todo.completed) count++;
        return count;
    }, 0);

    let completedCount = todos.reduce((count, todo) => {
        if (todo.completed) count++;
        return count;
    }, 0);


    const handleClick = (e, filterOption) => {
        e.preventDefault();
        dispatch({type: SET_FILTER, filterOption: filterOption})
    };

    const deleteCompleted = () => {
        dispatch({type: DELETE_COMPLETED})
    };


    return (
        <footer className="footer">
      <span className="todo-count">
        <strong>{notCompletedCount} </strong>
        items left
      </span>
            <ul className="filters">
                <li>
                    <a
                        href="/"
                        className={filter === "all" ? "selected" : ""}
                        onClick={(e) => {
                            handleClick(e, "all");
                        }}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a
                        href="/active"
                        className={filter === "active" ? "selected" : ""}
                        onClick={(e) => {
                            handleClick(e, "active");
                        }}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a
                        href="/completed"
                        className={filter === "completed" ? "selected" : ""}
                        onClick={(e) => {
                            handleClick(e, "completed");
                        }}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            {completedCount > 0 && (
                <button className="clear-completed" onClick={deleteCompleted}>
                    Clear completed
                </button>
            )}
        </footer>
    );
}
