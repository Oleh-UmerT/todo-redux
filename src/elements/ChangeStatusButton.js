import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../styles/Buttons.css';

function UpdateTodoButton({ id }) {
    const dispatch = useDispatch();
    const selector = useSelector((state) => (state.todos))
    const [stat, setStat] = useState(false)


    const updateTodo = () => {
        selector.map((el) => {
            if (el.id === id && !el.status) {
                dispatch({ type: 'FINISHED_TODO', payload: el.id })
                setStat(true)
            }
            if (el.id === id && el.status) {
                dispatch({ type: 'UNFINISHED_TODO', payload: el.id })
                setStat(false)
            }
            return null
        })
    }

    return (
        <button className={stat ? 'updateStatGreen' : 'updateStatRed'} onClick={updateTodo}></button>
    );
}

export default UpdateTodoButton;