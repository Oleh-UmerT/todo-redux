import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { todos } from './reducers/todo';
import App from './App';
import './styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container);
const store = configureStore({ reducer: todos });

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
