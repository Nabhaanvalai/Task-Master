import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';

const App: React.FC = () => {
  return (
    <TodoProvider>
      <div className="app-container">
        <header>
          <h1>TaskMaster</h1>
          <p className="app-subtitle">Your ultimate task management solution</p>
        </header>
        <main className="todo-container">
          <TodoForm />
          <TodoList />
        </main>
        <footer>
          <p>&copy; {new Date().getFullYear()} TaskMaster</p>
        </footer>
      </div>
    </TodoProvider>
  );
};

export default App; 