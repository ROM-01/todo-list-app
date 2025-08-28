import { useState, useEffect } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel';

function TodoListItem({ todo, onCompleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, setWorkingTitle] = useState(todo.title);

  useEffect(() => {
    setWorkingTitle(todo.title);
  }, [todo.title]);

  const handleUpdate = (event) => {
    if (!isEditing) return;
    event.preventDefault();

    onUpdateTodo({ id: todo.id, title: workingTitle });

    setIsEditing(false);
  };

  const handleCancel = () => {
    setWorkingTitle(todo.title);
    setIsEditing(false);
  };

  return (
    <li>
      {}
      <form onSubmit={handleUpdate}>
        {isEditing ? (
          <>
            <TextInputWithLabel
              elementId={`edit-${todo.id}`}
              label="Edit Todo"
              value={workingTitle}
              onChange={(e) => setWorkingTitle(e.target.value)}
              ref={null}
            />
            {}
            <button type="submit">Update</button>
            {}
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => onCompleteTodo(todo.id)}
            />
            {}
            <span onClick={() => setIsEditing(true)}>{todo.title}</span>
          </>
        )}
      </form>
    </li>
  );
}

export default TodoListItem;
