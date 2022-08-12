import React, { useState, useEffect } from 'react';
import '../styles/AddTodo.css';
import AddTodoButton from '../elements/AddTodoButton';
import { useSelector } from 'react-redux';

function AddTodo({ setVisible }) {
  const selector = useSelector((state) => state.todos);

  const [open, setOpen] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoText, setTodoText] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [id, setId] = useState(-1);
  const [finishedTodo, setFinishedTodo] = useState(Number(0));
  const [unfinishedTodo, setUnfinishedTodo] = useState(Number(0));

  const maxLetters = 20;

  useEffect(() => {
    setId((id) => id + 1);
    setFinishedTodo(Number(0));
    setUnfinishedTodo(Number(0));
    selector.map((el) => {
      el.status
        ? setFinishedTodo((finishedTodo) => finishedTodo + 1)
        : setUnfinishedTodo((unfinishedTodo) => unfinishedTodo + 1);
      return null;
    });
  }, [selector]);

  const changeState = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const onChange = (event) => {
    event.target.name === 'title'
      ? setTodoTitle(event.target.value)
      : setTodoText(event.target.value);
  };

  return (
    <div>
      <nav>
        <button className="Button" onClick={changeState}>
          Add Todo
        </button>
        <button className="Button" onClick={() => setVisible('all')}>
          Clear Filter
        </button>
        <button className="Button" onClick={() => setVisible('finished')}>
          Show Finished({finishedTodo})
        </button>
        <button className="Button" onClick={() => setVisible('unfinished')}>
          Show Unfinished({unfinishedTodo})
        </button>
      </nav>
      {open ? (
        <div className="addBlock">
          <input
            className="addTitle"
            type="text"
            value={todoTitle}
            onChange={onChange}
            name="title"
          />
          <textarea
            className="addText"
            value={todoText}
            onChange={onChange}
            name="text"
            placeholder="maximum 20 characters"
          />
          <AddTodoButton
            title={todoTitle}
            text={todoText}
            id={id}
            maxLetters={maxLetters}
            setErrorMessage={setErrorMessage}
          />
        </div>
      ) : (
        <></>
      )}
      {errorMessage ? <p>fields are filled incorrectly</p> : <></>}
    </div>
  );
}

export default AddTodo;
