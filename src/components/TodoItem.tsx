import React, { useState } from 'react';
import { FaTrash, FaEdit, FaCheck, FaTimes, FaSave } from 'react-icons/fa';
import { Todo } from '../types';
import { useTodoContext } from '../context/TodoContext';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { deleteTodo, toggleTodo, editTodo } = useTodoContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim() !== '') {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            className="edit-input"
          />
          <div className="todo-actions">
            <button className="icon-button save" onClick={handleSave} aria-label="Save">
              <FaSave />
            </button>
            <button className="icon-button cancel" onClick={handleCancel} aria-label="Cancel">
              <FaTimes />
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="todo-content">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="todo-checkbox"
            />
            <span className={`todo-text ${todo.completed ? 'completed-text' : ''}`}>
              {todo.text}
            </span>
          </div>
          <div className="todo-actions">
            <button
              className="icon-button edit"
              onClick={handleEdit}
              aria-label="Edit"
              disabled={todo.completed}
            >
              <FaEdit />
            </button>
            <button className="icon-button delete" onClick={() => deleteTodo(todo.id)} aria-label="Delete">
              <FaTrash />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem; 