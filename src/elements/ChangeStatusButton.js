import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../styles/Buttons.css';

function UpdateTodoButton({ id }) {
    const dispatch = useDispatch();
    const selector = useSelector((state) => (state.todos))


    const updateTodo = () => {
        selector.map((el) => {
            if (el.id === id && !el.status) {
                dispatch({ type: 'FINISHED_TODO', payload: el.id })
            }
            if (el.id === id && el.status) {
                dispatch({ type: 'UNFINISHED_TODO', payload: el.id })
            }
            return null
        })
    }

    return (
        selector.map((el) => {
            if (el.id === id && !el.status) {
                return <button className={el.status ? 'updateStatGreen' : 'updateStatRed'} onClick={updateTodo}></button>
            }
            if (el.id === id && el.status) {
                return <button className={el.status ? 'updateStatGreen' : 'updateStatRed'} onClick={updateTodo}></button>
            }
            return null
        })
        
    );
}

export default UpdateTodoButton;