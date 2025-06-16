import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useTodoContext } from '../context/TodoContext';

const TodoForm: React.FC = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="todo-input"
        aria-label="Add a new task"
      />
      <button type="submit" className="add-button" aria-label="Add task">
        <FaPlus />
      </button>
    </form>
  );
};

export default TodoForm; 