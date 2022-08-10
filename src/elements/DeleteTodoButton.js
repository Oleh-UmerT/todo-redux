import React from 'react';
import { useDispatch } from "react-redux";
import '../styles/Buttons.css';

function DeleteTodoButton({ id }) {
    const dispatch = useDispatch();

    const deleteTodo = () => {
        dispatch({ type: 'DELETE_TODO', payload: id })
    }

    return (
        <button className='deleteButton' onClick={deleteTodo}>delete</button>
    );
}

export default DeleteTodoButton;