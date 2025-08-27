import { useState, useRef } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';

function TodoForm({ onAddTodo, isSaving }) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');
  const todoTitleInput = useRef();

  function handleAddTodo(event) {
    event.preventDefault();
    if (workingTodoTitle.trim() === '') return;

    onAddTodo({ title: workingTodoTitle.trim(), isCompleted: false });
    setWorkingTodoTitle('');
    todoTitleInput.current.focus();
  }

  function handleChange(e) {
    setWorkingTodoTitle(e.target.value);
  }

  return (
    <form onSubmit={handleAddTodo}>
      <TextInputWithLabel
        elementId="todoTitle"
        label="Todo"
        value={workingTodoTitle}
        onChange={handleChange}
        inputRef={todoTitleInput}
      />

      <button disabled={workingTodoTitle.trim() === ''}>
        {isSaving ? 'Saving...' : 'Add Todo'}
      </button>
    </form>
  );
}

export default TodoForm;
