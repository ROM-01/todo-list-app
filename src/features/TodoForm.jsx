import { useState, useRef } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';

function TodoForm({ onAddTodo }) {
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');
  const todoTitleInput = useRef();

  function handleAddTodo(event) {
    event.preventDefault();
    if (workingTodoTitle.trim() === '') return;

    onAddTodo(workingTodoTitle.trim());
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
        labelText="Todo"
        value={workingTodoTitle}
        onChange={handleChange}
        ref={todoTitleInput} 
      />

      <button disabled={workingTodoTitle.trim() === ''}>Add Todo</button>
    </form>
  );
}

export default TodoForm;
