import { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 1rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  margin-right: 0.5rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem;
  ${(props) => props.disabled && `font-style: italic;`}
`;

function TodoForm({ onAddTodo, isSaving }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTodo(title.trim());
    setTitle('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todoTitle">New Todo:</label>
        <StyledInput
          id="todoTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo"
        />
        <StyledButton type="submit" disabled={isSaving || !title.trim()}>
          {isSaving ? 'Saving...' : 'Add Todo'}
        </StyledButton>
      </div>
    </StyledForm>
  );
}

export default TodoForm;
