import React from 'react';
import '../styles/AddTodo.css';
import { useDispatch } from 'react-redux';

function AddTodoButton({ title, text, id, maxLetters, setErrorMessage }) {
  const dispatch = useDispatch();

  const addNewTodo = () => {
    if (text.split('').length <= maxLetters && text !== '' && title !== '') {
      dispatch({ type: 'ADD_TODO', payload: { title: title, text: text, id: id, status: false } });
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <div>
      <button className="Button" onClick={addNewTodo}>
        Add New Todo
      </button>
    </div>
  );
}

export default AddTodoButton;
