import { useState } from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../actions";

export function InputTodo() {
    const [newTodo, setNewTodo] = useState("");
    const dispatch  = useDispatch();

    const handleSubmit = (e) => {
        if (e.key === "Enter" && newTodo.trim() !== "") {
            e.preventDefault();
            dispatch(addTodo(newTodo))
            setNewTodo("");
        }
    };

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
