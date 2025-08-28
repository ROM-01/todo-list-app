import { useState } from 'react';

function TodoForm({ onAddTodo, isSaving }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTodo({
      title: title.trim(),
      isCompleted: false,
    });

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todoTitle">New Todo:</label>
        <input
          id="todoTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo"
        />
        <button type="submit" disabled={isSaving || !title.trim()}>
          {isSaving ? 'Saving...' : 'Add Todo'}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
