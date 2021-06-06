import { TodoItem } from "./TodoItem";
import {useSelector} from "react-redux";
import {COMPLETED, ACTIVE} from "../constants/filterValues";

export function ListTodos() {

    const todos = useSelector(state => state.todosReducer);
    const filter = useSelector(state => state.filterReducer);

    let filteredTodos = todos.filter((todo) => {
            switch (filter) {
                case ACTIVE:
                    return !todo.completed;
                case COMPLETED:
                    return todo.completed;
                default:
                    return todo;
            }
    })

    return (
        <ul className="todo-list">
            { filteredTodos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                );
            })}
        </ul>
    );
}
