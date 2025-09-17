import { useState, useEffect } from 'react';
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

function TodosViewForm({
  sortField,
  setSortField,
  sortDirection,
  setSortDirection,
  queryString,
  setQueryString,
}) {
  const [localQueryString, setLocalQueryString] = useState(queryString);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setQueryString(localQueryString);
    }, 500);

    return () => clearTimeout(debounce);
  }, [localQueryString, setQueryString]);

  function preventRefresh(e) {
    e.preventDefault();
  }

  return (
    <StyledForm onSubmit={preventRefresh}>
      <div>
        <label>
          Search todos:
          <StyledInput
            type="text"
            value={localQueryString}
            onChange={(e) => setLocalQueryString(e.target.value)}
          />
        </label>
        <StyledButton type="button" onClick={() => setLocalQueryString('')}>
          Clear
        </StyledButton>
      </div>

      <div>
        <label>
          Sort by
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="createdTime">Time added</option>
          </select>
        </label>

        <label>
          Direction
          <select
            value={sortDirection}
            onChange={(e) => setSortDirection(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </div>
    </StyledForm>
  );
}

export default TodosViewForm;
