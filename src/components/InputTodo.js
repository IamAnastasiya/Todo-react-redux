import { useState } from "react";
import {useDispatch} from "react-redux";
import {ADD_TODO} from "../constants/ActionTypes";

export function InputTodo() {
    const [newTodo, setNewTodo] = useState("");
    const dispatch  = useDispatch();

    const handleSubmit = (e) => {
        if (e.key === "Enter" && newTodo.trim() !== "") {
            e.preventDefault();
            addTodo();
            setNewTodo("");
        }
    };

    const addTodo = () => {
        dispatch({type: ADD_TODO, id: Math.random(), text: newTodo})
    }

    return (
        <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(e) => setNewTodo(e.currentTarget.value)}
            onKeyPress={handleSubmit}
        />
    );
}
