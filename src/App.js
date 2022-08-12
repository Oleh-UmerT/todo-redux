import React, { useState } from 'react';
import './styles/App.css';
import AddTodo from './components/AddTodo';
import ShowTodos from './components/ShowTodos';

function App() {
  const [visible, setVisible] = useState('all');

  return (
    <div className="App App-body">
      <AddTodo setVisible={setVisible} />
      <ShowTodos visible={visible} />
    </div>
  );
}

export default App;
