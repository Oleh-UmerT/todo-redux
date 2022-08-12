import React from 'react';
import { useSelector } from 'react-redux';
import DeleteTodoButton from '../elements/DeleteTodoButton';
import UpdateTodoButton from '../elements/ChangeStatusButton';
import '../styles/ShowTodos.css';

function ShowTodos({ visible }) {
  const selector = useSelector((state) => state.todos);

  return (
    <div>
      {Object.values(selector).map((item, id) => {
        if (visible === 'all') {
          return (
            <div key={id} className="todoBlock">
              <span className="todoTitle">{item?.title}</span>
              <span className="todoText">{item?.text}</span>
              <UpdateTodoButton id={item.id} />
              <DeleteTodoButton id={item.id} />
            </div>
          );
        } else if (visible === 'finished' && item?.status) {
          return (
            <div key={id} className="todoBlock">
              <span className="todoTitle">{item?.title}</span>
              <span className="todoText">{item?.text}</span>
              <UpdateTodoButton id={item.id} />
              <DeleteTodoButton id={item.id} />
            </div>
          );
        } else if (visible === 'unfinished' && !item?.status) {
          return (
            <div key={id} className="todoBlock">
              <span className="todoTitle">{item?.title}</span>
              <span className="todoText">{item?.text}</span>
              <UpdateTodoButton id={item.id} />
              <DeleteTodoButton id={item.id} />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default ShowTodos;
