import { useState, useEffect, useRef } from "react";
import {useDispatch} from "react-redux";
import {deleteTodo, toggleTodo, updateTodo} from "../actions";


export function TodoItem({ todo }) {
    const dispatch  = useDispatch();
    const editRef = useRef(null);
    const [value, setValue] = useState(todo.text);
    const [editing, setEditing] = useState(false);
    const classNameCompleted = todo.completed ? "completed" : "";
    const classNameEditing = editing ? "editing" : "";

    useEffect(() => {
        if (editing) {
            editRef.current.focus();
        }
    }, [editing]);

    return (
        <li className={`${classNameCompleted} ${classNameEditing}`}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    value={true}
                    id={todo.id}
                    onChange={() => dispatch(toggleTodo(todo.id))}
                />
                <label
                    onDoubleClick={() => {
                        setEditing(true);
                    }}
                >
                    {todo.text}
                </label>
                <button
                    type="button"
                    id={todo.id}
                    className="destroy"
                    onClick={(e) => dispatch(deleteTodo(e.currentTarget.id))}
                > </button>
            </div>
            <input
                type="text"
                ref={editRef}
                className="edit"
                onBlur={() => {
                    setEditing(false);
                    dispatch(updateTodo(todo.id, value));
                }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </li>
    );
}
