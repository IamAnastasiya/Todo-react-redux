import { useState, useEffect, useRef } from "react";
import {useDispatch} from "react-redux";
import {TOGGLE_TODO, DELETE_TODO, UPDATE_TODO} from "../constants/ActionTypes";

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

    const deleteTodo = (id) => {
        dispatch({type: DELETE_TODO, id: id})
    }

    const toggleTodo = (id) => {
        dispatch({type: TOGGLE_TODO, id: id})
    }

    const updateTodo = (id, value) => {
        dispatch({type: UPDATE_TODO, id: id, text: value})
    }

    return (
        <li className={`${classNameCompleted} ${classNameEditing}`}>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    value={true}
                    id={todo.id}
                    onChange={(e) => toggleTodo(e.currentTarget.id)}
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
                    onClick={(e) => deleteTodo(e.currentTarget.id)}
                > </button>
            </div>
            <input
                type="text"
                ref={editRef}
                className="edit"
                onBlur={() => {
                    setEditing(false);
                    updateTodo(todo.id, value);
                }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </li>
    );
}
