import {useSelector, useDispatch} from "react-redux";
import {ALL, COMPLETED, ACTIVE} from "../constants/filterValues";
import {deleteCompleted, setFilter} from "../actions";

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

    const handleClick = (e, filter) => {
        e.preventDefault();
        dispatch(setFilter(filter))
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
                        className={filter === ALL ? "selected" : ""}
                        onClick={(e) => {
                            handleClick(e, ALL);
                        }}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a
                        href="/active"
                        className={filter === ACTIVE ? "selected" : ""}
                        onClick={(e) => {
                            handleClick(e, ACTIVE);
                        }}
                    >
                        Active
                    </a>
                </li>
                <li>
                    <a
                        href="/completed"
                        className={filter === COMPLETED ? "selected" : ""}
                        onClick={(e) => handleClick(e, COMPLETED)}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            {completedCount > 0 && (
                <button className="clear-completed" onClick={()=>dispatch(deleteCompleted())}>
                    Clear completed
                </button>
            )}
        </footer>
    );
}
